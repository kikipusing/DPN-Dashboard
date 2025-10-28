import { tr } from "@nuxt/ui/runtime/locale/index.js";

export default defineAppConfig({
  // https://ui.nuxt.com/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "bluebps",
      secondary: "lightblue",
      neutral: "slate",
      error: "red",
      light: "white",
    },
    card: {
      slots: {
        root: "rounded-lg overflow-hidden",
        header: "p-4 sm:px-6",
        body: "p-2 sm:p-3", // ubah dari p-4 sm:p-6 jadi p-2 sm:p-3
        footer: "p-4 sm:px-6",
      },
    },
    input: {
      compoundVariants: [
        {
          color: "primary",
          variant: ["outline", "subtle"],
          class:
            "focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-sky-500",
        },
      ],
    },
    button: {
      slots: {
        base: "rounded-[8px] hover:cursor-pointer",
      },
      variants: {
        size: {
          xl: {
            base: "px-4 py-3 text-[18px] gap-2",
            trailingIcon: "size-6",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary-foreground",
          variant: "solid",
          class:
            "text-primary bg-white hover:bg-gray-50 disabled:bg-white aria-disabled:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        },
        {
          color: "primary-foreground",
          variant: "outline",
          class:
            "ring ring-inset ring-white/50 text-white hover:bg-white/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
        },
      ],
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
    breadcrumb: {
      variants: {
        active: {
          true: {
            link: "text-white font-medium opacity-80 hover:cursor-default hover:text-white",
          },
          false: {
            link: "text-white font-bold hover:!text-white/90",
          },
        },
      },
    },
    carousel: {
      slots: {
        dot: "bg-[#BCBCBC]",
      },
      variants: {
        active: {
          true: {
            dot: "bg-secondary",
          },
        },
      },
    },
    navigationMenu: {
      slots: {
        // list: 'min-w-100',
        root: "transition-all duration-400 ease-in-out",
      },
      variants: {
        color: {
          light: {
            link: "!p-2 before:bg-transparent text-inverted hover:text-inverted ",
          },
        },
        active: {
          false: {
            link: "text-gray-300",
          },
        },
      },
      compoundVariants: [
        {
          color: "light",
          class: {
            link: "hover:before:bg-secondary hover:text-inverted",
            // childLink: 'hover:before:bg-transparent hover:text-inverted ',
            linkLeadingIcon: "group-hover:text-inverted",
          },
        },
        {
          color: "light",
          active: true,
          class: {
            link: "before:bg-secondary text-inverted font-semibold",
          },
        },
        {
          orientation: "vertical",
          collapsed: false,
          class: {
            childList: "ms-5 border-s border-primary-400 border-dashed",
            childItem: [
              "ps-4 -ms-px",
              // '[&>*]:before:bg-primary'
            ],
          },
        },
      ],
    },
    table: {
      slots: {
        root: "rounded-lg",
        thead: "bg-primary ",
        th: "text-white font-bold border-white not-last:border-r-1",
        tbody: "[&>*:nth-child(odd)]:bg-slate-100 [&>tr>*:]:border-b-1",
        td: "text-[#282828] border-slate-300 not-last:border-r-1",
        tr: "[last>*]:border-b-0",
      },
    },
  },
});
