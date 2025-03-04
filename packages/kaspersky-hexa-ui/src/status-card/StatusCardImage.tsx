
import { getChildTestProps } from '@helpers/hooks/useTestAttribute'
import { TestingAttributes } from '@helpers/typesHelpers'
import React, { FC } from 'react'

import { StatusDangerSquareSolid, StatusErrorSolid, StatusOkSolid, StatusWarningSolid } from '@kaspersky/hexa-ui-icons/24'
import { ShieldDangerSolid, ShieldOkSolid } from '@kaspersky/hexa-ui-icons/32'

import { StyledIcon, StyledImage } from './statusCardCss'
import { IconVariant, StatusCardImageProps, StatusCardMode } from './types'

type IconMap = Record<IconVariant, { icons: { [key in StatusCardMode]: FC }, size: number }>

export const iconMap: (testAttributes?: TestingAttributes) => IconMap = (testAttributes) => ({
  default: {
    icons: {
      error: () => <StatusErrorSolid {...getChildTestProps('error-icon', testAttributes)} />,
      critical: () => <StatusDangerSquareSolid {...getChildTestProps('critical-icon', testAttributes)} />,
      warning: () => <StatusWarningSolid {...getChildTestProps('warning-icon', testAttributes)} />,
      success: () => <StatusOkSolid {...getChildTestProps('success-icon', testAttributes)} />
    },
    size: 24
  },
  shield: {
    icons: {
      error: () => <ShieldDangerSolid {...getChildTestProps('shield-error-icon', testAttributes)} />,
      critical: () => <ShieldDangerSolid {...getChildTestProps('shield-critical-icon', testAttributes)} />,
      warning: () => <ShieldDangerSolid {...getChildTestProps('shield-warning-icon', testAttributes)} />,
      success: () => <ShieldOkSolid {...getChildTestProps('shield-success-icon', testAttributes)} />
    },
    size: 32
  }
})

export const StatusCardImage: FC<StatusCardImageProps> = ({ cssConfig, mode, iconVariant, testAttributes }) => {
  const IconComponent = iconMap(testAttributes)[iconVariant].icons[mode]
  return (
    <StyledImage>
      <StyledIcon>
        <IconComponent />
      </StyledIcon>
      <svg width={cssConfig.imageWidth} height={cssConfig.imageHeight} viewBox="0 0 50 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_8019_1330)">
          <path d="M41.054 35.5965L44.2634 25.758C45.0951 23.2085 44.4617 20.4082 42.6137 18.4649L34.0459 9.45508L25.6486 19.3507L16.4342 34.4295L16.4342 34.6567C16.4342 36.4229 17.0746 38.1291 18.2367 39.4591L19.0667 40.409C20.8497 42.4497 23.6167 43.3345 26.2529 42.7069L35.8053 40.4332C38.2776 39.8447 40.2658 38.0125 41.054 35.5965Z" fill={cssConfig.image} />
          <g filter="url(#filter0_f_8019_1330)">
            <path d="M27.3196 40.6356L40.245 19.1407C40.3178 19.0196 40.4063 18.9091 40.508 18.8123C41.0983 18.2505 41.1663 17.3175 40.6639 16.6722L35.4694 10L23.743 19.6538L18.6803 22.8959L14.6345 27.9184C12.4898 30.5808 12.4519 34.4168 14.5434 37.1233L17.7056 41.2152C19.46 43.4855 22.5426 44.1554 25.0453 42.8103C25.9802 42.3078 26.7658 41.5566 27.3196 40.6356Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter1_f_8019_1330)">
            <path d="M31.2531 30.8275L37.482 21.1176C39.014 18.7296 39.0232 15.6701 37.5057 13.2729L36.2237 11.2478C34.5561 8.61352 31.3994 7.32935 28.3664 8.05148L19.3579 10.1964C16.9385 10.7724 14.979 12.5408 14.1585 14.8885L10.5732 25.1471C9.70244 27.6386 10.2447 30.4062 11.9913 32.385L17.3677 38.476C21.5928 43.2625 29.4933 40.7001 30.1047 34.3449L30.1312 34.0695C30.2422 32.915 30.6268 31.8037 31.2531 30.8275Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter2_f_8019_1330)">
            <path d="M29.6383 33.8094L38.2248 23.1335C40.0635 20.8473 40.3546 17.6824 38.9638 15.0992L35.5333 8.72772C34.0247 5.92575 30.8746 4.42422 27.748 5.01677L13.8424 7.65212C11.1916 8.15449 9.03413 10.0782 8.23244 12.6543L4.45514 24.7921C3.56985 27.6369 4.50247 30.7341 6.8113 32.617L15.3849 39.6091C18.4798 42.1331 23.0286 41.701 25.593 38.6393L29.6383 33.8094Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter3_f_8019_1330)">
            <path d="M30.9875 36.6031L39.9931 24.0076C41.8227 21.4487 41.8069 18.0054 39.9539 15.4634L36.6545 10.937C35.0288 8.7068 32.2841 7.58431 29.5615 8.03621L18.5498 9.8639C15.9466 10.296 13.7793 12.0996 12.8816 14.581L8.2847 27.287C7.25169 30.1423 8.09439 33.3389 10.4008 35.3139L17.1364 41.0815C20.0366 43.5649 24.3606 43.3934 27.055 40.6881L30.2217 37.5084C30.5011 37.2279 30.7572 36.9251 30.9875 36.6031Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter4_f_8019_1330)">
            <path d="M23.6663 38.0225L34.8704 12.8303C35.2083 12.0705 35.255 11.2129 35.0016 10.4209C34.4446 8.67997 32.607 7.6947 30.8487 8.19418L15.9802 12.4179C13.547 13.1091 11.6451 15.0109 10.9538 17.4441L7.6965 28.9093C7.06299 31.1391 7.52639 33.5373 8.945 35.3705L10.9939 38.0184C11.2647 38.3683 11.5667 38.6929 11.8962 38.9881L15.1164 41.8728C17.9986 44.4547 22.5955 42.9051 23.3264 39.1052C23.398 38.7325 23.5121 38.3693 23.6663 38.0225Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter5_f_8019_1330)">
            <path d="M29.1406 31.1254L32.7477 21.5442C32.8885 21.1702 32.9913 20.7829 33.0546 20.3883C33.7927 15.7876 29.2041 12.1569 24.8965 13.9333L20.9132 15.5759C19.1085 16.3201 17.6771 17.7563 16.9389 19.5635L13.5044 27.9722C12.4363 30.5874 12.9732 33.5841 14.8828 35.6658L15.4812 36.3181C18.9428 40.0916 25.1127 39.2202 27.3939 34.6357L29.1406 31.1254Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter6_f_8019_1330)">
            <path d="M35.8921 32.942C35.9454 32.1022 36.3887 31.3549 36.9049 30.6903L39.3581 27.5318C39.8743 26.8672 40.2394 26.0928 40.7151 25.3987C42.025 23.4872 44.4918 22.139 42.9332 20.5001L34.9702 9.96859C33.5113 8.43444 30.5613 9.7368 28.2354 10.3824C27.5683 10.5676 26.9045 10.7749 26.2831 11.0801L21.4855 13.4362C20.8641 13.7413 20.1856 13.9165 19.5466 14.183C17.7593 14.9286 17.0339 16.6975 16.2548 18.7663L13.876 27.011C12.9237 29.5397 12.0878 33.0478 13.876 35.0735L19.0482 40.3919C20.5758 42.1225 23.5538 41.8282 26.0252 41.3159C26.8193 41.1513 27.5694 40.8254 28.2538 40.3903L33.4204 37.1058C34.1048 36.6707 34.9761 36.5003 35.5427 35.92C36.1696 35.2779 35.8092 34.2487 35.8921 32.942Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter7_f_8019_1330)">
            <path d="M17.0262 40.6558L12.582 26.8956L10.8347 28.8446L9.62512 32.4735L17.0262 40.6558Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter8_f_8019_1330)">
            <path d="M23.8094 43.3553L28.1908 41.9593L26.2154 41.0264L23.2234 41.0265L19.974 41.9593L21.5082 43.3553H23.8094Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter9_f_8019_1330)">
            <path d="M24.0955 43.2388L27.2678 42.4327L27.3596 40.6562L24.3676 40.6564L21.1182 41.5892L22.6524 42.9852L24.0955 43.2388Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter10_f_8019_1330)">
            <path d="M24.7586 43.0826L27.9309 42.2765L28.0227 40.5L25.0306 40.5001L21.7812 41.433L23.3155 42.8289L24.7586 43.0826Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter11_f_8019_1330)">
            <path d="M34.6984 9.59237L41.0509 16.9368L34.0055 15.1255L30.0679 11.9754L31.7145 9.3623L34.6984 9.59237Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter12_f_8019_1330)">
            <path d="M36.0698 11.1754L41.0509 17.0793L35.3769 16.7085L31.4393 13.5584L33.086 10.9453L36.0698 11.1754Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter13_f_8019_1330)">
            <path d="M34.0717 8.93188L42.6176 18.969L36.0584 16.5659L27.3038 12.4307L29.9421 9.44813L34.0717 8.93188Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter14_f_8019_1330)">
            <path d="M35.5666 10.4668L42.7967 18.8122L31.7201 12.8622L32.2832 10.5948L35.5666 10.4668Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter15_f_8019_1330)">
            <path d="M31.245 11.5369V18.0634L30.554 22.9008L42.1482 19.8295L35.468 9.84766L31.245 11.5369Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter16_f_8019_1330)">
            <path d="M34.4246 14.5859L33.9645 21.0962L32.9342 25.8729L42.3258 19.223L38.0976 12.6123L34.4246 14.5859Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter17_f_8019_1330)">
            <path d="M28.6255 37.1901L38.2489 26.3805C40.6597 23.6726 40.5713 19.6105 38.045 17.0058L31.2499 10L15.921 13.8516L13.3803 19.2949L10.7767 24.2938C9.59702 26.5588 9.77113 29.2744 11.2308 31.3768L17.5506 40.479C18.6333 42.0384 20.7867 42.4671 22.404 41.4452L27.1225 38.4639C27.6819 38.1104 28.1878 37.6816 28.6255 37.1901Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter18_f_8019_1330)">
            <path d="M26.5646 36.904L36.4571 25.5705C38.9353 22.7314 38.8444 18.4724 36.2475 15.7415L28.4107 8.91199L13.5051 12.4344L10.8934 18.1415L8.21702 23.3827C7.00434 25.7575 7.18331 28.6047 8.68383 30.809L16.2138 39.7877C17.3267 41.4226 20.0573 40.8591 21.7198 39.7877L25.0197 38.2396C25.5947 37.869 26.1148 37.4194 26.5646 36.904Z" fill={cssConfig.image} />
          </g>
          <g filter="url(#filter19_f_8019_1330)">
            <path d="M35.3003 16.1777V22.7042L34.6093 27.5416L41.9656 17.9495L38.796 14.2969L35.3003 16.1777Z" fill={cssConfig.image} />
          </g>
        </g>
        <defs>
          <filter id="filter0_f_8019_1330" x="11.9715" y="8.97149" width="30.057" height="35.557" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.514257" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter1_f_8019_1330" x="7.86741" y="5.55552" width="33.0671" height="37.6958" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1.14851" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter2_f_8019_1330" x="-0.708898" y="0.0546517" width="45.3791" height="46.0311" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.41701" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter3_f_8019_1330" x="2.6608" y="2.7493" width="43.882" height="45.2752" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5941" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter4_f_8019_1330" x="1.89888" y="2.54476" width="38.7837" height="46.1224" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.75985" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter5_f_8019_1330" x="7.7742" y="8.28543" width="30.5473" height="35.5867" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="2.5941" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter6_f_8019_1330" x="12.1398" y="8.56445" width="31.9789" height="33.8335" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.342838" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter7_f_8019_1330" x="7.84236" y="25.1129" width="10.9666" height="17.3257" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.89138" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter8_f_8019_1330" x="19.6312" y="40.6835" width="8.90247" height="3.01466" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.171419" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter9_f_8019_1330" x="21.0153" y="40.5534" width="6.44716" height="2.78822" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.0514258" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter10_f_8019_1330" x="21.6784" y="40.3971" width="6.44716" height="2.78822" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.0514258" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter11_f_8019_1330" x="29.7936" y="9.08803" width="11.5316" height="8.123" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.137135" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter12_f_8019_1330" x="31.1651" y="10.671" width="10.1601" height="6.68245" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.137135" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter13_f_8019_1330" x="24.8697" y="6.49773" width="20.1821" height="14.9054" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1.21708" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter14_f_8019_1330" x="31.5487" y="10.2954" width="11.4194" height="8.68818" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.0857096" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter15_f_8019_1330" x="28.5655" y="7.85919" width="15.5712" height="17.03" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.994231" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter16_f_8019_1330" x="31.4257" y="11.1038" width="12.4086" height="16.2775" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.754244" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter17_f_8019_1330" x="7.80583" y="7.80583" width="34.3883" height="36.3883" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1.09708" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter18_f_8019_1330" x="4.4016" y="5.89501" width="36.8725" height="37.9353" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="1.50849" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <filter id="filter19_f_8019_1330" x="34.3693" y="14.0569" width="7.8363" height="13.7247" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="0.119993" result="effect1_foregroundBlur_8019_1330" />
          </filter>
          <clipPath id="clip0_8019_1330">
            <rect width={cssConfig.imageWidth} height={cssConfig.imageHeight} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </StyledImage>
  )
}
