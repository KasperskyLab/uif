import React from 'react'
import styled from 'styled-components'

export const AppLogo = () => {
  return (
    <StyledAppLogo href="#" className="logo-ksc">
      <svg className="logo-svg" width="128" height="128" viewBox="0 0 128 128" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_0_4722)">
          <g clipPath="url(#clip1_0_4722)">
            <g clipPath="url(#clip2_0_4722)">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M113.495 33.4495L67.4951 6.93934C65.3318 5.69261 62.6682 5.69261 60.5049 6.93934L14.5049 33.4495C12.3363 34.6993 11 37.0119 11 39.5149V88.4929C11 90.9959 12.3363 93.3085 14.5049 94.5583L60.5049 121.068C62.6682 122.315 65.3318 122.315 67.4951 121.068L113.495 94.5583C115.664 93.3085 117 90.9959 117 88.4929V39.5149C117 37.0119 115.664 34.6993 113.495 33.4495ZM70.4909 1.74043C66.4733 -0.574934 61.5267 -0.574935 57.5091 1.74043L11.5091 28.2506C7.48177 30.5716 5 34.8664 5 39.5149V88.4929C5 93.1414 7.48177 97.4362 11.5091 99.7572L57.5091 126.267C61.5267 128.583 66.4733 128.583 70.4909 126.267L116.491 99.7572C120.518 97.4362 123 93.1414 123 88.4929V39.5149C123 34.8664 120.518 30.5716 116.491 28.2506L70.4909 1.74043Z"
                    fill="var(--menu--logo_brand)"></path>
            </g>
            <path
              d="M45 56C43.8954 56 43 56.8954 43 58C43 59.1046 43.8954 60 45 60H47V79C47 79.5523 47.4477 80 48 80C48.5523 80 49 79.5523 49 79V60H51C52.1046 60 53 59.1046 53 58C53 56.8954 52.1046 56 51 56H45Z"
              fill="var(--menu--logo_icon)"></path>
            <path
              d="M81 60V57C81 56.4477 80.5523 56 80 56C79.4477 56 79 56.4477 79 57V60H77C75.8954 60 75 60.8954 75 62C75 63.1046 75.8954 64 77 64H79V79C79 79.5523 79.4477 80 80 80C80.5523 80 81 79.5523 81 79V64H83C84.1046 64 85 63.1046 85 62C85 60.8954 84.1046 60 83 60H81Z"
              fill="var(--menu--logo_icon)"></path>
            <path
              d="M65 57V72H67C68.1046 72 69 72.8954 69 74C69 75.1046 68.1046 76 67 76H65V79C65 79.5523 64.5523 80 64 80C63.4477 80 63 79.5523 63 79V76H61C59.8954 76 59 75.1046 59 74C59 72.8954 59.8954 72 61 72H63V57C63 56.4477 63.4477 56 64 56C64.5523 56 65 56.4477 65 57Z"
              fill="var(--menu--logo_icon)"></path>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M30 87C30 88.6569 31.3431 90 33 90H95C96.6569 90 98 88.6569 98 87V41C98 39.3431 96.6569 38 95 38H33C31.3431 38 30 39.3431 30 41V87ZM34 50H94V86H34V50Z"
                  fill="var(--menu--logo_icon)"></path>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_4722">
            <rect width="128" height="128" fill="var(--menu--logo_icon)"></rect>
          </clipPath>
          <clipPath id="clip1_0_4722">
            <rect width="128" height="128" fill="var(--menu--logo_icon)"></rect>
          </clipPath>
          <clipPath id="clip2_0_4722">
            <rect width="128" height="128" fill="var(--menu--logo_icon)"></rect>
          </clipPath>
        </defs>
      </svg>
      <div className="logo-text">
        <div className="logo-text-osmp">Open Single</div>
        <div className="logo-text-osmp">Management Platform</div>
      </div>
    </StyledAppLogo>
  )
}

const StyledAppLogo = styled.a`
  min-height: 64px;
  display: flex;
  margin: 10px 20px 24px 20px;
  color: #fff;
  text-decoration: none;
  overflow: hidden;
  align-items: center;
  opacity: 1;
  position: relative;
  transition: opacity 0.1s .15s ease;

  .logo-text-strong {
    font-size: 14px;
    line-height: 1.1;
    font-weight: 600;
  }

  .logo-text-light {
    font-size: 10px;
    line-height: 1;
    font-weight: 600;
    margin-top: .2em;
  }

  .logo-text-osmp {
    font-size: 14px;
    line-height: 1.1;
    font-weight: 600;
    margin-top: .2em;
    color: var(--menu--text--logo);
  }

  &:active,
  &:hover,
  &:focus {
    color: #fff;
    text-decoration: none;
  }

  .logo-svg {
    position: relative;
    top: 0;
    width: 64px;
    height: 64px;
    margin: 0 5px;
  }

  &.logo-ksc-cloud {
    .logo-text-strong {
      font-size: 14px;
      line-height: 1;
      font-weight: 600;
      margin: 0.2em 0;
    }

    .logo-text-light {
      font-size: 10px;
      line-height: 1;
      font-weight: 600;
    }
  }

  .ant-layout-sider-collapsed & {
    opacity: 0;
    transition: opacity 0s 0s ease;
    width: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
  }
`
