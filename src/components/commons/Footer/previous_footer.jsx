import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="text-center social-media-bar" id="">
        <div className="container container-fluid">
          <div className="row">
            <div className="col-lg-4 offset-lg-8 my-2 p-0">
              <a href="https://facebook.com/">
                <span className="social-media-bar__logo social-media-bar__logo--facebook">
                  <svg
                    width="10"
                    height="20"
                    viewBox="0 0 10 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.65382 19.1726H2.56282V9.67859H0.517822V6.40559H2.56282V4.44159C2.56282 1.77259 3.71782 0.183594 6.99582 0.183594H9.72582V3.45659H8.02082C6.74282 3.45659 6.65882 3.91459 6.65882 4.76859L6.65382 6.40559H9.74582L9.38382 9.67859H6.65382V19.1726Z"
                    />
                  </svg>
                </span>
              </a>
              <a href="https://twitter.com/">
                <span className="social-media-bar__logo social-media-bar__logo--twitter">
                  <svg
                    width="19"
                    height="15"
                    viewBox="0 0 19 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.3981 2.41449C17.7231 2.70013 17.0072 2.88765 16.2741 2.97084C17.0365 2.53297 17.623 1.84099 17.899 1.01526C17.1731 1.42694 16.3789 1.71699 15.5508 1.87286C14.8519 1.15947 13.8744 0.755389 12.8519 0.757085C10.8105 0.757085 9.15361 2.33909 9.15361 4.29061C9.15361 4.5679 9.18627 4.83816 9.25021 5.09623C6.17639 4.94862 3.45216 3.54236 1.62787 1.404C1.30934 1.92529 1.12764 2.53297 1.12764 3.18076C1.12764 4.40623 1.78024 5.48805 2.77231 6.12188C2.18494 6.10468 1.61046 5.95309 1.09706 5.67983V5.7249C1.09706 7.43659 2.37189 8.86495 4.06278 9.19027C3.5182 9.3312 2.94722 9.35187 2.39305 9.25072C2.86384 10.6549 4.22998 11.6764 5.8475 11.7061C4.5821 12.6524 2.98781 13.2184 1.25483 13.2184C0.960153 13.2181 0.66574 13.2015 0.373047 13.1689C2.00943 14.1713 3.95365 14.7571 6.04185 14.7571C12.8438 14.7571 16.5627 9.37118 16.5627 4.70056C16.5627 4.54779 16.5627 4.39502 16.5513 4.24335C17.2749 3.74295 17.8998 3.12372 18.3969 2.41449H18.3981Z" />
                  </svg>
                </span>
              </a>
              <a href="https://youtube.com/">
                <span className="social-media-bar__logo social-media-bar__logo--youtube">
                  <svg
                    width="26"
                    height="19"
                    viewBox="0 0 26 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.61 0.183594H5.98961C3.12627 0.183594 0.799805 2.55085 0.799805 5.4644V12.8973C0.799805 15.8163 3.12627 18.1781 5.98961 18.1781H20.6046C23.4733 18.1781 25.7944 15.8108 25.7944 12.8973V5.4644C25.7998 2.55085 23.4733 0.183594 20.61 0.183594ZM17.0959 9.54779L10.2575 12.8642C10.0731 12.9524 9.86705 12.82 9.86705 12.6103V5.7679C9.86705 5.55821 10.084 5.42578 10.2629 5.51958L17.1013 9.04564C17.3074 9.15048 17.302 9.44846 17.0959 9.54779Z" />
                  </svg>
                </span>
              </a>
              <a href="https://twitch.tv/">
                <span className="social-media-bar__logo social-media-bar__logo--twitch">
                  <svg
                    width="20"
                    height="19"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.9602 13.6252V9.5538V0.680176H2.93894L0.811279 2.97688V15.0868H6.13043V18.845H8.47085L11.024 16.1307H17.407L19.9602 13.6252ZM7.40694 13.4165H4.00268C3.76864 13.4165 3.57715 13.2286 3.57715 12.9989V2.76817C3.57715 2.5385 3.76864 2.35059 4.00268 2.35059H17.6197C17.8537 2.35059 18.0452 2.5385 18.0452 2.76817V10.7022C18.0452 10.8171 18.0027 10.9215 17.9229 10.9998L15.5825 13.2965C15.5027 13.3748 15.391 13.4165 15.2793 13.4165H11.3697L8.07183 15.6401C8.00268 15.6871 7.91757 15.7132 7.83247 15.7132C7.76332 15.7132 7.69949 15.6976 7.63566 15.6662C7.49204 15.5932 7.40694 15.4522 7.40694 15.2956V13.4165Z"
                    />
                    <path d="M13.79 9.76274V5.58691H12.0878V9.76274H13.79ZM9.53465 9.76274V5.58691H7.83252V9.76274H9.53465Z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <hr />
          <div className="row content-justify-end footer">
            <div className="col-lg-4">
              <div className="d-inline footer__copyright">
                <p>©2020 Binar-Austria, inc. All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-2 mb-2 text-center">
              <div className="d-inline">
                <Link href="/privacy-policy" className="m-0 footer__link">
                  <span className="footer__span">Privacy Policy </span>
                </Link>
                -
                <Link href="/terms-of-services" className="m-0 footer__link">
                  <span className="footer__span"> Terms of Services </span>
                </Link>
                -
                <Link href="/code-of-conduct" className="m-0 footer__link">
                  <span className="footer__span"> Code of Conduct</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
