<template>
  <a
    rel="nofollow noreferrer"
    title="share on Twitter"
    :href="href"
    target="_blank"
    ><svg
      class="fill-blue-600 dark:fill-blue-400"
      :width="width || '24'"
      :height="height || '28'"
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :headline="headline"
      :origin="origin"
    >
      <path
        d="M6.28961 16.6667C13.8368 16.6667 17.9648 10.254 17.9648 4.69286C17.9648 4.51074 17.9648 4.32942 17.9528 4.1489C18.7559 3.55314 19.4491 2.81557 20 1.97059C19.2511 2.31091 18.4566 2.53406 17.6432 2.63269C18.4996 2.10692 19.141 1.27933 19.4472 0.305029C18.6418 0.795183 17.7605 1.14067 16.8416 1.32652C16.0657 0.480379 14.9821 0 13.8497 0C11.5965 0 9.74246 1.90148 9.74246 4.21224C9.74246 4.53281 9.77816 4.85238 9.84879 5.16462C6.55121 4.99512 3.47457 3.39546 1.39199 0.767781C0.309023 2.67976 0.869375 5.15757 2.66238 6.38546C2.00945 6.36563 1.37055 6.18495 0.8 5.85873V5.91205C0.800547 7.90768 2.18465 9.64223 4.09199 10.0374C3.48793 10.2063 2.85398 10.231 2.23922 10.1095C2.77543 11.8196 4.32168 12.9983 6.07281 13.032C4.62008 14.2029 2.82449 14.8389 0.976797 14.8371C0.650313 14.8364 0.324141 14.8161 0 14.7763C1.87633 16.0112 4.06016 16.6664 6.28961 16.6634"
        :fill="color"
      ></path>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true,
    },
    headline: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
};
</script>
