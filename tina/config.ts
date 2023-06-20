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
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch: "master",
  clientId: "834ff0fb-a8c2-471a-8f32-9f0c34b4af05", // Get this from tina.io
  token: "e24d7734efb42a8ee7570c3278c2184182fb8722", // Get this from tina.io
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
