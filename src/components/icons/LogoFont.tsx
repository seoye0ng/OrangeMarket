import { tokens } from '@/styles/token';

import { IIconDefaultProps } from './types/iconType';

const style = {
  transition: 'fill 0.1s ease-out',
};

function LogoFont({ color = 'primary-100' }: IIconDefaultProps) {
  const iconColor = tokens.colors[color];

  return (
    <svg
      width="157"
      height="30"
      viewBox="0 0 157 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_23_1193)">
        <path
          d="M15.7869 13.268C16.9869 13.268 17.9709 13.196 18.7389 13.052C19.5309 12.908 20.1549 12.692 20.6109 12.404C21.0909 12.116 21.4149 11.756 21.5829 11.324C21.7749 10.868 21.8709 10.328 21.8709 9.704C21.8709 9.08 21.7629 8.54 21.5469 8.084C21.3549 7.628 20.9589 7.256 20.3589 6.968C19.7589 6.656 18.9189 6.428 17.8389 6.284C16.7589 6.14 15.3549 6.068 13.6269 6.068H1.63888C1.13488 6.068 0.882875 5.828 0.882875 5.348V1.568C0.882875 1.088 1.13488 0.847998 1.63888 0.847998H13.4469C16.3989 0.847998 18.8469 1.052 20.7909 1.46C22.7349 1.868 24.2829 2.468 25.4349 3.26C26.5869 4.028 27.3909 4.964 27.8469 6.068C28.3269 7.172 28.5669 8.408 28.5669 9.776C28.5669 11.144 28.3389 12.38 27.8829 13.484C27.4509 14.564 26.7309 15.488 25.7229 16.256C24.7389 17 23.4309 17.576 21.7989 17.984C20.1669 18.368 18.1629 18.56 15.7869 18.56H14.3469C11.9709 18.56 9.96688 18.368 8.33488 17.984C6.72688 17.576 5.41888 17 4.41088 16.256C3.42688 15.488 2.71888 14.564 2.28688 13.484C1.85488 12.38 1.63888 11.144 1.63888 9.776V7.868C1.63888 7.388 1.87888 7.148 2.35888 7.148H7.57888C8.08288 7.148 8.33488 7.388 8.33488 7.868V9.704C8.33488 10.136 8.41888 10.568 8.58688 11C8.77888 11.432 9.09088 11.816 9.52288 12.152C9.97888 12.488 10.5909 12.764 11.3589 12.98C12.1509 13.172 13.1469 13.268 14.3469 13.268H15.7869ZM1.49488 29C0.990875 29 0.738875 28.748 0.738875 28.244V24.212C0.738875 23.732 0.990875 23.492 1.49488 23.492H11.4669V20.504C11.4669 20.024 11.7069 19.784 12.1869 19.784H17.7309C18.2109 19.784 18.4509 20.024 18.4509 20.504V23.492H28.3869C28.8909 23.492 29.1429 23.732 29.1429 24.212V28.244C29.1429 28.748 28.8909 29 28.3869 29H1.49488ZM33.2761 18.812C32.7721 18.812 32.5201 18.572 32.5201 18.092V8.66C32.5201 8.18 32.7721 7.94 33.2761 7.94H38.5321V5.636H33.2041C32.7001 5.636 32.4481 5.396 32.4481 4.916V1.604C32.4481 1.124 32.7001 0.883999 33.2041 0.883999H43.7161C44.2201 0.883999 44.4721 1.124 44.4721 1.604V10.892C44.4721 11.372 44.2201 11.612 43.7161 11.612H38.4601V13.988H45.6241C46.0801 13.988 46.3081 14.228 46.3081 14.708V18.056C46.3081 18.56 46.0801 18.812 45.6241 18.812H33.2761ZM60.2401 24.14C60.7201 24.14 60.9601 24.38 60.9601 24.86V28.64C60.9601 29.12 60.7201 29.36 60.2401 29.36H34.2841C33.8041 29.36 33.5641 29.12 33.5641 28.64V21.728C33.5641 21.248 33.8041 21.008 34.2841 21.008H39.7201C40.2001 21.008 40.4401 21.248 40.4401 21.728V24.14H60.2401ZM53.4001 19.712C53.4001 20.216 53.1601 20.468 52.6801 20.468H48.7201C48.2401 20.468 48.0001 20.216 48.0001 19.712V12.08H46.2361C45.7801 12.08 45.5521 11.84 45.5521 11.36V7.148C45.5521 6.644 45.7801 6.392 46.2361 6.392H48.0001V1.208C48.0001 0.703999 48.2401 0.451998 48.7201 0.451998H52.6801C53.1601 0.451998 53.4001 0.703999 53.4001 1.208V19.712ZM55.1641 1.1C55.1641 0.595998 55.4041 0.343998 55.8841 0.343998H59.8801C60.3601 0.343998 60.6001 0.595998 60.6001 1.1V20.108C60.6001 20.588 60.3601 20.828 59.8801 20.828H55.8841C55.4041 20.828 55.1641 20.588 55.1641 20.108V1.1ZM64.5174 1.784C64.5174 1.304 64.7694 1.064 65.2734 1.064H81.9774C82.4814 1.064 82.7334 1.304 82.7334 1.784V5.852C82.7334 6.332 82.4814 6.572 81.9774 6.572H77.3694L70.9254 29C70.8054 29.384 70.5054 29.576 70.0254 29.576H64.8414C64.3134 29.576 64.1214 29.288 64.2654 28.712L70.4574 6.572H65.2734C64.7694 6.572 64.5174 6.332 64.5174 5.852V1.784ZM86.2974 29.72C85.7934 29.72 85.5414 29.48 85.5414 29V1.1C85.5414 0.595998 85.7934 0.343998 86.2974 0.343998H91.4454C91.9494 0.343998 92.2014 0.595998 92.2014 1.1V29C92.2014 29.48 91.9494 29.72 91.4454 29.72H86.2974ZM77.6574 29.468C77.2014 29.468 76.9254 29.276 76.8294 28.892L74.4174 21.584C74.3694 21.416 74.3454 21.272 74.3454 21.152C74.3694 21.008 74.4054 20.84 74.4534 20.648L76.9374 11.972C77.0094 11.66 77.1534 11.492 77.3694 11.468C77.6094 11.444 77.7894 11.6 77.9094 11.936L83.5254 28.64C83.6694 29.192 83.4894 29.468 82.9854 29.468H77.6574ZM117.395 29.72C116.891 29.72 116.639 29.48 116.639 29V1.1C116.639 0.595998 116.891 0.343998 117.395 0.343998H122.543C123.047 0.343998 123.299 0.595998 123.299 1.1V11.036H125.171C125.651 11.036 125.891 11.288 125.891 11.792V16.58C125.891 17.06 125.651 17.3 125.171 17.3H123.299V29C123.299 29.48 123.047 29.72 122.543 29.72H117.395ZM96.4426 6.392C95.9626 6.392 95.7226 6.152 95.7226 5.672V1.82C95.7226 1.316 95.9626 1.064 96.4426 1.064H113.363C113.867 1.064 114.119 1.304 114.119 1.784V28.46C114.119 28.94 113.867 29.18 113.363 29.18H96.8386C96.3346 29.18 96.0826 28.94 96.0826 28.46V8.192C96.0826 7.712 96.3346 7.472 96.8386 7.472H101.951C102.455 7.472 102.707 7.712 102.707 8.192V23.852H107.495V6.392H96.4426ZM127.54 8.12C127.54 7.64 127.792 7.4 128.296 7.4H134.956C135.004 7.04 135.04 6.668 135.064 6.284C135.112 5.9 135.136 5.504 135.136 5.096H128.584C128.104 5.096 127.864 4.856 127.864 4.376V1.604C127.864 1.124 128.104 0.883999 128.584 0.883999H140.212C140.716 0.883999 140.968 1.136 140.968 1.64V4.592C140.968 5 140.956 5.408 140.932 5.816C140.908 6.2 140.872 6.584 140.824 6.968H142.984V1.208C142.984 0.703999 143.224 0.451998 143.704 0.451998H147.844C148.324 0.451998 148.564 0.703999 148.564 1.208V17.12C148.564 17.6 148.324 17.84 147.844 17.84H143.704C143.224 17.84 142.984 17.6 142.984 17.12V12.836H140.464C140.008 12.836 139.78 12.596 139.78 12.116V11.072C138.82 13.4 137.404 15.248 135.532 16.616C133.66 17.96 131.524 18.752 129.124 18.992C128.884 19.016 128.704 18.968 128.584 18.848C128.464 18.704 128.404 18.524 128.404 18.308V15.392C128.404 14.984 128.644 14.744 129.124 14.672C130.084 14.528 130.948 14.156 131.716 13.556C132.508 12.956 133.168 12.176 133.696 11.216L128.296 11.432C127.792 11.432 127.54 11.192 127.54 10.712V8.12ZM150.328 1.1C150.328 0.595998 150.568 0.343998 151.048 0.343998H155.224C155.704 0.343998 155.944 0.595998 155.944 1.1V18.92C155.944 19.4 155.704 19.64 155.224 19.64H151.048C150.568 19.64 150.328 19.4 150.328 18.92V1.1ZM138.592 29.18C138.328 29.42 137.98 29.54 137.548 29.54H136.684H136.54H128.836C128.332 29.54 128.08 29.3 128.08 28.82V24.86C128.08 24.38 128.332 24.14 128.836 24.14H135.1L139.168 19.928C139.432 19.688 139.78 19.568 140.212 19.568H146.62C146.908 19.568 147.088 19.676 147.16 19.892C147.232 20.108 147.16 20.312 146.944 20.504L138.592 29.18ZM143.272 26.984C142.912 26.672 142.9 26.324 143.236 25.94L146.62 22.412C146.956 22.076 147.304 22.076 147.664 22.412L149.644 24.14H155.728C156.232 24.14 156.484 24.38 156.484 24.86V28.82C156.484 29.3 156.232 29.54 155.728 29.54H154.54H154.468H147.16C146.944 29.54 146.752 29.504 146.584 29.432C146.44 29.384 146.284 29.3 146.116 29.18L143.272 26.984Z"
          fill={iconColor}
          style={style}
        />
      </g>
      <defs>
        <filter
          id="filter0_i_23_1193"
          x="0.73877"
          y="0.343994"
          width="155.745"
          height="31.376"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_23_1193"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default LogoFont;
