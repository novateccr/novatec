import { defineConfig } from "tinacms";
import { acerca_de_nosotrosFields } from "./templates";
import { defaultFields } from "./templates";
import { industriaFields } from "./templates";
import { inicioFields } from "./templates";
import { marcasFields } from "./templates";
import { noticiasFields } from "./templates";
import { productosFields } from "./templates";
import { servicio_t_cnicoFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
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
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
        ],
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
        format: "yml",
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
});
