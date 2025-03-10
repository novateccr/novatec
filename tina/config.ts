import { defineConfig } from "tinacms";
import {
  acerca_de_nosotrosFields,
  familiasFields,
  industriaFields,
  inicioFields,
  marcasFields,
  noticiasFields,
  productosFields,
  servicio_t_cnicoFields,
} from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || "master";
const TINA_SEARCH_INDEXER_TOKEN = process.env.TINA_SEARCH_INDEXER_TOKEN;

export default defineConfig({
  branch,
  clientId: "3691dcce-c73a-4ad9-a39c-742ae6a6f889", // Get this from tina.io
  token: "9c829a7671fccacf428af1b77c6f1c65982b54ee", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    loadCustomStore: async () => {
      const pack = await import("next-tinacms-cloudinary");
      return pack.TinaCloudCloudinaryMediaStore;
    },
  },
  schema: {
    collections: [
      {
        format: "md",
        label: "Pages",
        name: "pages",
        path: "content",
        frontmatterFormat: "yaml",
        match: {
          include: "*",
        },
        templates: [
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...acerca_de_nosotrosFields(),
            ],
            label: "acerca-de-nosotros",
            name: "acerca_de_nosotros",
          },
          {
            fields: [
              {
                type: "rich-text",
                name: "body",
                label: "Body of Document",
                description: "This is the markdown body",
                isBody: true,
              },
              ...inicioFields(),
            ],
            label: "inicio",
            name: "inicio",
          },
        ],
      },
      {
        format: "md",
        label: "Familias",
        name: "familias",
        path: "content/familias",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [...familiasFields()],
      },
      {
        format: "md",
        label: "Industrias",
        name: "industrias",
        path: "content/industrias",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...industriaFields(),
        ],
      },
      {
        format: "md",
        label: "Marcas",
        name: "marcas",
        path: "content/marcas",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...marcasFields(),
        ],
      },
      {
        format: "md",
        label: "Novatec construccion",
        name: "novatec_construccion",
        path: "content/novatec-construccion",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...industriaFields(),
        ],
      },
      {
        format: "md",
        label: "Noticias",
        name: "noticias",
        path: "content/noticias",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...noticiasFields(),
        ],
      },
      {
        format: "md",
        label: "Servicio tecnico",
        name: "servicio_tecnico",
        path: "content/servicio-tecnico",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...servicio_t_cnicoFields(),
        ],
      },
      {
        format: "md",
        label: "Productos",
        name: "productos",
        path: "content/productos",
        frontmatterFormat: "yaml",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...productosFields(),
        ],
      },
      {
        format: "yaml",
        label: "Social Networks",
        name: "social_networks",
        path: "data",
        frontmatterFormat: "yaml",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "social",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
  search: {
    tina: {
      indexerToken: TINA_SEARCH_INDEXER_TOKEN,
      stopwordLanguages: ["spa"],
    },
    indexBatchSize: 100,
    maxSearchIndexFieldLength: 100,
  },
});
