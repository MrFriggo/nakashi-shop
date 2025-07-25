import { noBlocksLexical } from "@/fields/noBlocksLexical";

import type { Block } from "payload";

export const FormBlock: Block = {
  slug: "formBlock",
  interfaceName: "FormBlock",
  fields: [
    {
      name: "form",
      type: "relationship",
      relationTo: "forms",
      required: true,
    },
    {
      name: "enableIntro",
      type: "checkbox",
      label: "Enable Intro Content",
    },
    {
      name: "introContent",
      type: "richText",
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
      localized: true,
      editor: noBlocksLexical,
      label: "Intro Content",
    },
  ],
  graphQL: {
    singularName: "FormBlock",
  },
  labels: {
    plural: "Form Blocks",
    singular: "Form Block",
  },
};
