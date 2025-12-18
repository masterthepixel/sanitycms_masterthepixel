import { defineQuery } from "next-sanity";

export const ogImageQuery = defineQuery(`
  *[_id == $id][0]{
    title,
  }    
`);