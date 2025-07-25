import { marginFields, paddingFields } from "@/fields/spacingFields";

import type { Block } from "payload";

export const MediaBlock: Block = {
  slug: "mediaBlock",
  interfaceName: "MediaBlock",
  fields: [
    {
      name: "media",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    marginFields,
    paddingFields,
  ],
};
