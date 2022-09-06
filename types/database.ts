/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/Skills": {
    get: {
      parameters: {
        query: {
          logo?: parameters["rowFilter.Skills.logo"];
          name?: parameters["rowFilter.Skills.name"];
          description?: parameters["rowFilter.Skills.description"];
          favorite?: parameters["rowFilter.Skills.favorite"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Skills"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Skills */
          Skills?: definitions["Skills"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          logo?: parameters["rowFilter.Skills.logo"];
          name?: parameters["rowFilter.Skills.name"];
          description?: parameters["rowFilter.Skills.description"];
          favorite?: parameters["rowFilter.Skills.favorite"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          logo?: parameters["rowFilter.Skills.logo"];
          name?: parameters["rowFilter.Skills.name"];
          description?: parameters["rowFilter.Skills.description"];
          favorite?: parameters["rowFilter.Skills.favorite"];
        };
        body: {
          /** Skills */
          Skills?: definitions["Skills"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/Career": {
    get: {
      parameters: {
        query: {
          company?: parameters["rowFilter.Career.company"];
          title?: parameters["rowFilter.Career.title"];
          period?: parameters["rowFilter.Career.period"];
          description?: parameters["rowFilter.Career.description"];
          link?: parameters["rowFilter.Career.link"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Career"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Career */
          Career?: definitions["Career"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          company?: parameters["rowFilter.Career.company"];
          title?: parameters["rowFilter.Career.title"];
          period?: parameters["rowFilter.Career.period"];
          description?: parameters["rowFilter.Career.description"];
          link?: parameters["rowFilter.Career.link"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          company?: parameters["rowFilter.Career.company"];
          title?: parameters["rowFilter.Career.title"];
          period?: parameters["rowFilter.Career.period"];
          description?: parameters["rowFilter.Career.description"];
          link?: parameters["rowFilter.Career.link"];
        };
        body: {
          /** Career */
          Career?: definitions["Career"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  Skills: {
    /** Format: text */
    logo: string;
    /**
     * Format: text
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    name: string;
    /** Format: text */
    description?: string;
    /** Format: boolean */
    favorite?: boolean;
  };
  Career: {
    /**
     * Format: text
     * @default
     */
    company: string;
    /** Format: text */
    title?: string;
    /**
     * Format: text
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    period: string;
    /** Format: text */
    description?: string;
    /** Format: json */
    link?: unknown;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description Skills */
  "body.Skills": definitions["Skills"];
  /** Format: text */
  "rowFilter.Skills.logo": string;
  /** Format: text */
  "rowFilter.Skills.name": string;
  /** Format: text */
  "rowFilter.Skills.description": string;
  /** Format: boolean */
  "rowFilter.Skills.favorite": string;
  /** @description Career */
  "body.Career": definitions["Career"];
  /** Format: text */
  "rowFilter.Career.company": string;
  /** Format: text */
  "rowFilter.Career.title": string;
  /** Format: text */
  "rowFilter.Career.period": string;
  /** Format: text */
  "rowFilter.Career.description": string;
  /** Format: json */
  "rowFilter.Career.link": string;
}

export interface operations {}

export interface external {}
