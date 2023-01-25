export interface Pokedex {
  hits: Hit2[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  exhaustive: Exhaustive;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  serverTimeMS: number;
}

export interface Exhaustive {
  nbHits: boolean;
  typo: boolean;
}

export interface Hit2 {
  id: number;
  name: string;
  name_l1: string;
  name_l2: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  _geoloc: Geo;
  geography: Geo;
  level: number;
  hierarchy: HitHierarchy[];
  adCount: number;
  aliases: any[];
  type: Type | null;
  hasBuilding: boolean;
  trackID: string;
  roles: null;
  completionStatus: CompletionStatus;
  objectID: string;
  _highlightResult: HighlightResult;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface HighlightResult {
  name: ExternalID;
  externalID: ExternalID;
  hierarchy: HighlightResultHierarchy[];
}

export interface ExternalID {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: MatchedWord[];
  fullyHighlighted?: boolean;
}

export enum MatchLevel {
  Full = "full",
  None = "none",
}

export enum MatchedWord {
  Ajm = "ajm",
}

export interface HighlightResultHierarchy {
  externalID: ExternalID;
  slug: ExternalID;
}

export enum CompletionStatus {
  Both = "both",
  Completed = "completed",
  OffPlan = "off-plan",
}

export interface HitHierarchy {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  name_l2: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  type?: Type;
}

export enum Type {
  CondoBuilding = "condo-building",
  Neighbourhood = "neighbourhood",
}

export interface ProcessingTimingsMS {
  afterFetch: AfterFetch;
  fetch: Fetch;
  request: Request;
  total: number;
}

export interface AfterFetch {
  format: Format;
  total: number;
}

export interface Format {
  highlighting: number;
  total: number;
}

export interface Fetch {
  total: number;
}

export interface Request {
  roundTrip: number;
}
