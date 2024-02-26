import styles from '../css/page.module.css'

export function Background() {
  return (
    <svg className={styles.background}>
      <filter id="grainy">
        <feTurbulence type="fractalNoise" baseFrequency="0.7" />
        <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
      </filter>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M152.922 73.3906C143.894 73.3906 135.241 81.7047 127.331 86.3514C120.016 90.6487 113.353 95.5942 106.63 101.3C94.496 111.599 82.8101 123.418 70.9598 134.365C57.7481 146.57 43.2083 158.278 33.419 174.868C20.4658 196.818 9.37226 219.92 6.01775 247.036C3.19683 269.838 3 293.203 3 316.258C3 333.973 6.09714 346.124 11.6911 362.357C17.7933 380.066 27.2791 393.335 39.6959 404.775C52.1885 416.284 68.334 420.691 82.6687 427.309C89.7194 430.564 97.2227 429.982 104.638 431.285C117.822 433.603 131.616 436.448 144.955 436.587C177.054 436.922 209.074 439.239 241.221 439.239C282.569 439.239 323.705 443.034 364.949 445.203C380.657 446.03 396.369 445.866 412.087 445.866C419.005 445.866 426.106 446.928 432.487 443.068C487.423 409.83 528.965 344.021 557.301 279.143C570.053 249.947 581.741 219.858 589.41 187.976C594.285 167.706 593.997 146.204 593.997 125.307C593.997 108.434 586.061 90.4314 579.029 76.3362C570.799 59.8391 555.715 47.7271 542.997 37.012C533.062 28.6425 525.527 26.3898 514.207 22.2838C498.214 16.4824 482.072 11.3231 465.923 6.08281C453.447 2.03432 439.404 3.13717 426.632 3.13717C403.664 3.13717 379.825 2.13692 357.646 10.5013C348.553 13.9306 339.889 19.3294 330.607 22.2838C316.488 26.778 301.502 30.6602 287.695 36.2756C280.621 39.1524 273.911 41.1301 266.39 41.5777C260.854 41.9072 255.474 45.1427 249.852 45.5543C244.838 45.9214 239.828 47.4491 234.945 48.7945C228.466 50.5795 221.591 50.4768 215.389 53.5812C207.1 57.7308 195.662 61.4608 186.6 61.4608C179.676 61.4608 173.141 65.2404 166.2 65.4374C160.876 65.5884 150.018 68.5473 147.49 74.7161"
        filter="url(#grainy)"
      />
    </svg>
  )
}
