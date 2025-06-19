import { z } from "zod";

export const notesSchema = z.object({
  name: z.string().nonempty("please enter name").min(1, "minimum 1 character"),
  price: z
    .string()
    .nonempty("please enter price")
    .min(1, "minimum 1 character"),
});

export type notesSchemaType = z.infer<typeof notesSchema>;
