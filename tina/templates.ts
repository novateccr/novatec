import type { TinaField } from "tinacms";
export function acerca_de_nosotrosFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
  ] as TinaField[];
}
export function defaultFields() {
  return [
    {
      type: "object",
      name: "date",
      label: "Date",
      fields: [],
    },
    {
      type: "string",
      name: "title",
      label: "Title",
    },
  ] as TinaField[];
}
export function industriaFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    // {
    //   type: 'string',
    //   name: 'custom_id',
    //   nameOverride: 'id',
    //   label: 'Id'
    // },
    {
      type: "image",
      name: "imagen",
      label: "Imagen",
    },
    {
      type: "string",
      name: "link",
      label: "Link",
    },
    {
      type: "string",
      name: "catalogo",
      label: "Catalogo",
      description: "Link (URL) al catálogo.",
    },
    {
      type: "string",
      name: "meta_keywords",
      label: "Meta keywords",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
    {
      type: "number",
      name: "weight",
      label: "Weight",
    },
  ] as TinaField[];
}
export function familiaFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    // {
    //   type: 'string',
    //   name: 'custom_id',
    //   nameOverride: 'id',
    //   label: 'Id'
    // },
    {
      type: "image",
      name: "imagen",
      label: "Imagen",
    },
    {
      type: "string",
      name: "link",
      label: "Link",
    },
    {
      type: "string",
      name: "catalogo",
      label: "Catalogo",
      description: "Link (URL) al catálogo.",
    },
    {
      type: "string",
      name: "meta_keywords",
      label: "Meta keywords",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
    {
      type: "number",
      name: "weight",
      label: "Weight",
    },
    {
      type: "object",
      name: "menu",
      label: "Menu Settings",
      fields: [
        {
          type: "object",
          name: "principal",
          label: "Principal Menu",
          fields: [
            {
              type: "string",
              name: "parent",
              label: "Parent",
              ui: {
                component: "hidden",
              },
              defaultValue: "Productos",
            },
            {
              type: "number",
              name: "weight",
              label: "Menu Order",
              description: "Lower numbers appear first in the menu",
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}

export function familiasFields() {
  return [...familiaFields()] as TinaField[];
}
export function inicioFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
    {
      type: "object",
      name: "slides",
      label: "Slides",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "boolean",
          name: "published",
          label: "Published",
        },
        {
          type: "string",
          name: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "object",
      name: "barra_azul",
      label: "Barra azul",
      fields: [
        {
          type: "string",
          name: "titular",
          label: "Titular",
        },
        {
          type: "string",
          name: "subtitular",
          label: "Subtitular",
        },
      ],
    },
    {
      type: "object",
      name: "barra_fondo_imagen",
      label: "Barra fondo imagen",
      fields: [
        {
          type: "string",
          name: "texto",
          label: "Texto",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "imagen",
          label: "Imagen",
        },
      ],
    },
  ] as TinaField[];
}
export function marcasFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    // {
    //   type: 'string',
    //   name: 'custom_id',
    //   nameOverride: 'id',
    //   label: 'Id'
    // },
    {
      type: "string",
      name: "link",
      label: "Link",
    },
    {
      type: "string",
      name: "catalogo",
      label: "Catalogo",
      description: "Link (URL) al catálogo.",
    },
    {
      type: "string",
      name: "meta_keywords",
      label: "Meta keywords",
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
    {
      type: "number",
      name: "weight",
      label: "Weight",
    },
    {
      type: "image",
      name: "logo",
      label: "Logo",
    },
  ] as TinaField[];
}
export function noticiasFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "image",
      name: "imagen_intro",
      label: "Imagen Intro",
    },
    {
      type: "string",
      name: "tags",
      label: "Tags",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "boolean",
      name: "featured",
      label: "Featured",
    },
  ] as TinaField[];
}
export function productosFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "marcas",
      label: "Marcas",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "familias",
      label: "Familias",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "industrias",
      label: "Industrias",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "image",
      name: "imagen",
      label: "Imagen",
      searchable: false,
    },
    {
      type: "string",
      name: "catalogo",
      label: "Catalogo",
      description: "Link (URL) al catálogo.",
      searchable: false,
    },
    {
      type: "string",
      name: "meta_description",
      label: "Meta description",
    },
    {
      type: "string",
      name: "meta_keywords",
      label: "Meta keywords",
    },
    {
      type: "number",
      name: "weight",
      label: "Weight",
      searchable: false,
    },
    {
      type: "boolean",
      name: "taxonomyCover",
      label: "Taxonomycover",
      searchable: false,
    },
    {
      type: "image",
      name: "galeria",
      label: "Galería",
      list: true,
      searchable: false,
    },
    {
      type: "string",
      name: "titulo_adicional",
      label: "Titulo adicional",
    },
  ] as TinaField[];
}
export function servicio_t_cnicoFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "image",
      name: "Imagen",
      label: "Imagen",
    },
    {
      type: "string",
      name: "info",
      label: "info",
    },
  ] as TinaField[];
}
