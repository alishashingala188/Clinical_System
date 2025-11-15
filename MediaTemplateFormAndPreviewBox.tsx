/* eslint-disable react-hooks/exhaustive-deps */
import { isFailed, isLoading, isSucceeded, options } from ' @/helpers/constant';
import { deleteImage } from ' @/store/slices/post/deleteImageSlice';
import {
  mediaTemplate,
  resetmediaTemplate,
} from ' @/store/slices/post/media_attachmentSlice';
import {
  resetUploadImage,
  uploadImage,
} from ' @/store/slices/post/uploadImageSlice';
import { RootState } from ' @/store/store';
import { FormType } from ' @/types/allformsTypes';
import { checkUrlValidityWithCache } from ' @/utils/api';
import { MAX_BUTTON_TITLE_TEXT } from ' @/validators/add-carousel-slider.schema';
import InvoiceImageUploader from ' @ui/file-upload/invoice-image-uploader';
import { useEffect, useState } from 'react';
import { FieldValues, Path, PathValue } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FiLink } from 'react-icons/fi';
import { RxInfoCircled } from 'react-icons/rx';
import { TfiReload, TfiText } from 'react-icons/tfi';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ActionIcon, Input, Text, Tooltip } from 'rizzui';
import { FBFeaturesFlag } from '../common/FBFeaturesFlag';
import { notification } from ' @/helpers/common';
import { usePathname } from 'next/navigation';
import { routes } from ' @/config/routes';
import { IgFeaturesFlag } from '../common/IgFeaturesFlag';

import { mediaTemplateInsta } from ' @/store/slices/post/media_attachmnet_instaSlice';

interface MediaTemplateFormAndPreviewBoxProps<T extends FieldValues> {
  form: FormType<T>;
  flow_index?: number;
}

export interface Metadata {
  title?: string;
  description?: string;
  image?: string;
  [key: string]: any;
}

const MediaTemplateFormAndPreviewBox = <T extends FieldValues>({
  form,
  flow_index,
}: MediaTemplateFormAndPreviewBoxProps<T>) => {
  // console.log('flow_index----', flow_index);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { pageAccountId } = FBFeaturesFlag();
  const { igAccountId } = IgFeaturesFlag();
  const { isIgSelected } = FBFeaturesFlag();
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [urlLoading, setUrlLoading] = useState(false);
  const [templateLoading, setTemplateLoading] = useState(false);
  const { uploadImageData, mediaTemplateData, errorMess } = useSelector(
    (state: RootState) => ({
      uploadImageData: state.uploadImage,
      mediaTemplateData: state.mediaTemplate,
      errorMess: state.errors,
    }),
    shallowEqual
  );
  const pathname = usePathname();
  const isUpcomingPost = pathname === routes.settings.upcomingPost;

  const { upComingRadioValue } = useSelector(
    (state: RootState) => state.upcomingRadioValue
  );

  const { flowAutomationRadioValue } = useSelector(
    (state: RootState) => state.FlowAutomationValue
  );

  const { register, errors, setValue, watch } = form;
  const currentMedia = watch('media_template')?.[0] || {};
  const { button_cta: buttonCta = [], link_metadata: linkMetadata = {} } =
    currentMedia;

  const isFlowAutomation =
    pathname === routes.settings.FlowAutomation.manageFlowAutomation ||
    isUpcomingPost;

  const fieldName = isUpcomingPost
    ? `upcomingPostList.${Number(upComingRadioValue)}`
    : isFlowAutomation
      ? `main_direct_message.${Number(flow_index ?? flowAutomationRadioValue)}`
      : 'media_template';

  // Sync link_metadata fields
  useEffect(() => {
    const updateField = (key: string, value: any) =>
      setValue?.(
        (isFlowAutomation
          ? `${fieldName}.media_template.0.${key}`
          : `media_template.0.${key}`) as Path<T>,
        value
      );

    updateField(
      'link_metadata.media_type',
      linkMetadata?.media_type || 'Image'
    );
    updateField('link_metadata.media_url', linkMetadata?.media_url || '');
    updateField(
      'link_metadata.attachment_id',
      linkMetadata?.attachment_id || ''
    );
    updateField('button_cta', buttonCta || []);
  }, [watch('media_template')]);

  // Handle upload success
  useEffect(() => {
    if (isSucceeded(uploadImageData)) {
      const uploadedUrl = uploadImageData?.data?.data?.image;
      const attachmentId = uploadImageData?.data?.data?.attachment_id;
      const isVideo = uploadImageData?.is_video;
      const media_type = isVideo ? 'video' : 'image';

      if (uploadedUrl) {
        // set form values
        setValue?.(
          (isFlowAutomation
            ? `${fieldName}.media_template.0.link_metadata.media_url`
            : `media_template.0.link_metadata.media_url`) as Path<T>,
          uploadedUrl
        );
        setValue?.(
          (isFlowAutomation
            ? `${fieldName}.media_template.0.link_metadata.media_type`
            : 'media_template.0.link_metadata.media_type`') as Path<T>,
          media_type as any
        );

        if (attachmentId) {
          setValue?.(
            (isFlowAutomation
              ? `${fieldName}.media_template.0.link_metadata.attachment_id`
              : `media_template.0.link_metadata.media_type`) as Path<T>,
            attachmentId
          );
        }

        const fbPayload = {
          media_type,
          url: uploadedUrl,
          page_account_id: pageAccountId,
        };

        const igPayload = {
          media_type,
          url: uploadedUrl,
          ig_account_id: igAccountId,
        };

        // dispatch based on selection
        if (isIgSelected) {
          dispatch(mediaTemplateInsta(igPayload));
        } else {
          dispatch(mediaTemplate(fbPayload));
        }
      }
    }
  }, [uploadImageData, mediaTemplateData]);

  // useEffect(() => {
  //   if (isSucceeded(uploadImageData)) {
  //     const uploadedUrl = uploadImageData?.data?.data?.image;
  //     const attachmentId = uploadImageData?.data?.data?.attachment_id;
  //     const isVideo = uploadImageData?.is_video;
  //     const media_type = isVideo ? 'video' : 'image';

  //     if (uploadedUrl) {
  //       setValue?.(
  //         'media_template.0.link_metadata.media_url' as Path<T>,
  //         uploadedUrl
  //       );
  //       setValue?.(
  //         'media_template.0.link_metadata.media_type' as Path<T>,
  //         media_type as any
  //       );

  //       if (attachmentId) {
  //         setValue?.(
  //           'media_template.0.link_metadata.attachment_id' as Path<T>,
  //           attachmentId
  //         );
  //       }

  //       const payload = {
  //         media_type,
  //         url: uploadedUrl,
  //         page_account_id: pageAccountId,
  //       };
  //       dispatch(mediaTemplate(payload));
  //     }
  //   }
  // }, [uploadImageData, mediaTemplateData]);

  // Handle mediaTemplate API result
  useEffect(() => {
    if (isSucceeded(mediaTemplateData)) {
      const returnedData = mediaTemplateData?.data as any;
      if (returnedData?.attachment_id) {
        setValue?.(
          (isFlowAutomation
            ? `${fieldName}.media_template.0.link_metadata.attachment_id`
            : `media_template.0.link_metadata.attachment_id`) as any,
          returnedData.attachment_id
        );
      }
      notification(
        mediaTemplateData.status,
        mediaTemplateData.error,
        errorMess?.data,
        ''
      );
    } else if (isFailed(mediaTemplateData)) {
      notification(
        mediaTemplateData.status,
        mediaTemplateData.error,
        errorMess?.data,
        ''
      );
    }
  }, [mediaTemplateData, t]);

  const handleRefetchUrl = async (url?: string) => {
    if (!url) return;
    setUrlLoading(true);
    try {
      const res = await fetch(
        `/api/fetch-metadata?url=${encodeURIComponent(url)}`
      );
      if (!res.ok) throw new Error('Failed to fetch metadata');

      const metadata = (await res.json()) as Metadata;
      const imageUrl = metadata?.image || metadata?.icon;

      setValue?.(
        (isFlowAutomation
          ? `${fieldName}.media_template.0.link_metadata.media_url`
          : `media_template.0.link_metadata.media_url`) as Path<T>,
        imageUrl
      );
      setValue?.(
        (isFlowAutomation
          ? `${fieldName}.media_template.0.link_metadata.media_type`
          : `media_template.0.link_metadata.media_url`) as Path<T>,
        'image' as any
      );

      // const payload = {
      //   media_type: 'image',
      //   url: imageUrl,
      //   page_account_id: pageAccountId,
      // };

      // setTemplateLoading(true);
      // await dispatch(mediaTemplate(payload));
      const payload = isIgSelected
        ? {
            media_type: 'image',
            url: imageUrl,
            ig_account_id: igAccountId, // Instagram
          }
        : {
            media_type: 'image',
            url: imageUrl,
            page_account_id: pageAccountId, // Facebook
          };

      setTemplateLoading(true);
      const response = isIgSelected
        ? await mediaTemplateInsta(payload)
        : await mediaTemplate(payload);

      await response;
    } catch (err) {
      console.error('Failed to refetch metadata:', err);
    } finally {
      setTemplateLoading(false);
      setUrlLoading(false);
    }
  };

  useEffect(() => {
    if (isLoading(mediaTemplateData) || isLoading(uploadImageData)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [uploadImageData, mediaTemplateData]);

  return (
    <div className="container col-span-2 grid grid-cols-1 gap-6 md:grid-cols-2 [&_.rizzui-input-label]:font-medium [&_.rizzui-input-label]:text-gray-900">
      <div className="col-span-full">
        <div className="mb-8">
          {watch('media_template')?.map((template: any, index: number) => {
            const linkPath = isFlowAutomation
              ? `${fieldName}.media_template.${index}.button_cta.0.link`
              : `media_template.${index}.button_cta.0.link`;
            const textPath = isFlowAutomation
              ? `${fieldName}.media_template.${index}.button_cta.0.text`
              : `media_template.${index}.button_cta.0.text`;

            const linkError =
              errors?.media_template?.[index]?.button_cta?.[0]?.link?.message;
            const textError =
              errors?.media_template?.[index]?.button_cta?.[0]?.text?.message;
            const textValue = watch(textPath) || '';

            const handleSelect = (val: any) => {
              const textPath = (
                isFlowAutomation
                  ? `${fieldName}.media_template.${index}.button_cta.0.text`
                  : `media_template.${index}.button_cta.0.text`
              ) as Path<T>;
              setIsOpenIndex(null);
              setValue!(textPath, val.label as PathValue<T, typeof textPath>, {
                shouldValidate: true,
              });
            };

            return (
              <>
                {!isIgSelected && (
                  <div
                    className="col-span-full mt-7 flex justify-between gap-4"
                    key={index}
                  >
                    <div className="flex w-full flex-col gap-4 sm:flex-row">
                      {/* ---- URL Field ---- */}
                      <div className="w-full flex-auto md:w-40 lg:w-60 xl:w-80">
                        <Input
                          type="text"
                          prefix={
                            <FiLink className="me-1.5 h-[16px] w-[16px]" />
                          }
                          label={
                            <Text className="font-inter flex items-center gap-2 text-gray-800 sm:text-sm">
                              {t('URL_Text')}
                              <Tooltip
                                content={t('URL_Text_tooltip')}
                                placement="top"
                                color="invert"
                                className="w-56 min-w-min"
                              >
                                <span>
                                  <RxInfoCircled className="h-[14px] w-[14px]" />
                                </span>
                              </Tooltip>
                            </Text>
                          }
                          inputClassName="bg-white text-[#1f2937]"
                          labelClassName="text-gray-800 sm:text-sm font-inter"
                          placeholder={t('Enter_url')}
                          {...register(linkPath as any)}
                          error={linkError}
                          onBlur={(e) =>
                            setValue?.(linkPath as any, e.target.value as any, {
                              shouldValidate: true,
                            })
                          }
                        />
                      </div>

                      {/* ---- Button Title Field ---- */}
                      <div className="w-full flex-auto md:w-10 lg:w-20 xl:w-32">
                        <div className="relative">
                          <Input
                            label={
                              <Text className="font-inter flex items-center gap-2 text-gray-800 sm:text-sm">
                                {t('Button_Title')}
                                <Tooltip
                                  content={t('Button_Title_tooltip')}
                                  placement="top"
                                  color="invert"
                                  className="w-56 min-w-min"
                                >
                                  <span>
                                    <RxInfoCircled className="h-[14px] w-[14px]" />
                                  </span>
                                </Tooltip>
                              </Text>
                            }
                            inputClassName="bg-white text-[#1f2937]"
                            prefix={
                              <TfiText className="me-1.5 h-[16px] w-[16px]" />
                            }
                            suffix={
                              <span className="text-xs text-gray-500">
                                {textValue.length}/{MAX_BUTTON_TITLE_TEXT}
                              </span>
                            }
                            labelClassName="text-gray-800 sm:text-sm font-inter"
                            placeholder={t('Enter_Title')}
                            {...register(textPath)}
                            value={textValue}
                            onFocus={() => setIsOpenIndex(index)}
                            onBlur={() =>
                              setTimeout(() => setIsOpenIndex(null), 150)
                            }
                            onChange={(e) => {
                              const newVal = e.target.value;
                              setValue!(
                                textPath as any,
                                newVal as PathValue<T, Path<T>>,
                                { shouldValidate: true }
                              );
                            }}
                            maxLength={MAX_BUTTON_TITLE_TEXT}
                            error={textError}
                            autoComplete="off"
                          />

                          {isOpenIndex === index && (
                            <div className="absolute left-0 top-[75px] z-10 max-h-60 w-full overflow-y-auto rounded-lg border bg-white shadow-lg">
                              {options.map((item: any, i: any) => (
                                <div
                                  key={i}
                                  className="flex cursor-pointer items-center gap-2 px-3 py-2 hover:bg-gray-100"
                                  onClick={() => handleSelect(item)}
                                >
                                  <span className="truncate">{item.label}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {index === 0 && (
                        <Tooltip
                          size="sm"
                          content={t('Fetch_URL_Data')}
                          placement="top"
                          color="invert"
                        >
                          <ActionIcon
                            onClick={() => handleRefetchUrl?.(watch(linkPath))}
                            variant="flat"
                            color="primary"
                            className="mt-7 flex shrink-0 max-[374px]:mt-[3.3rem]"
                            disabled={!watch(linkPath)?.length || !!linkError}
                          >
                            <TfiReload className="h-4 w-4" />
                          </ActionIcon>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
        {/* {watch('media_template')?.map((template: any, index: number) => ( */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-4 sm:gap-4">
          <div className="h-60 max-h-full">
            <InvoiceImageUploader
              // name="media_template.0.link_metadata.media_url"
              flowIndex={flow_index}
              name={
                isFlowAutomation
                  ? `${fieldName}.media_template.0.link_metadata.media_url`
                  : isUpcomingPost
                    ? `upcomingPostList.0.media_template.0.link_metadata.media_url`
                    : `media_template.0.link_metadata.media_url`
              }
              dropZoneClassName="w-full h-full"
              imageClassName="w-full border-muted hover:border-primary p-0 h-full"
              className="mb-2 h-full"
              accept="image/png,image/jpg,image/jpeg,video/mp4,video/mov,video/avi,video/webm"
              error={
                isFlowAutomation
                  ? errors?.[fieldName]?.media_template?.[0]?.link_metadata
                      ?.media_url?.message
                  : isUpcomingPost
                    ? errors?.upcomingPostList?.[0]?.media_template?.[0]
                        ?.link_metadata?.media_url?.message
                    : errors?.media_template?.[0]?.link_metadata?.media_url
                        ?.message
              }
              // error={
              //   isUpcomingPost
              //     ? errors?.upcomingPostList?.[0]?.media_template?.[0]
              //         ?.link_metadata?.media_url?.message
              //     : errors?.media_template?.[0]?.link_metadata?.media_url
              //         ?.message
              // }
              uploaderText={t('Upload Image or Video')}
              setValue={setValue}
              initialImage={watch(
                isFlowAutomation
                  ? `${fieldName}.media_template.0.link_metadata.media_url`
                  : `media_template.0.link_metadata.media_url`
              )}
              dispatch={dispatch}
              uploadImageData={uploadImageData}
              mediaTemplateData={mediaTemplateData}
              deleteImage={deleteImage}
              uploadImage={uploadImage}
              isLoading={
                isLoading(uploadImageData) ||
                isLoading(mediaTemplateData) ||
                templateLoading ||
                urlLoading
              }
              checkUrlValidity={checkUrlValidityWithCache}
              isSucceeded={isSucceeded}
              resetUploadImage={resetUploadImage}
              is_default_image={false}
              linkMetadata={linkMetadata}
              fieldName={fieldName}
              flowIndex={flow_index}
            />
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default MediaTemplateFormAndPreviewBox;