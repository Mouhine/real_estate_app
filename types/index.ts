export interface Pokedex {
  hits: Hit[];
  nbHits: number;
  page: number;
  nbPages: number;
  hitsPerPage: number;
  exhaustiveNbHits: boolean;
  exhaustive: Exhaustive;
  query: string;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: ProcessingTimingsMS;
  serverTimeMS: number;
}

export interface Exhaustive {
  nbHits: boolean;
}

export interface Hit {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: State;
  _geoloc: Geo;
  geography: Geo;
  purpose: Purpose;
  price: number;
  product: HitProduct;
  productLabel: ProductLabel;
  productScore: number;
  rentFrequency: RentFrequency;
  referenceNumber: string;
  permitNumber: null | string;
  projectNumber: null;
  title: string;
  title_l1: string;
  title_l2: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  location: Category[];
  category: Category[];
  createdAt: number;
  updatedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  score_l2: number;
  coverPhoto: CoverPhoto;
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  phoneNumber: PhoneNumber;
  contactName: string;
  agency: HitAgency;
  hash: string;
  keywords: string[];
  isVerified: boolean;
  verification: Verification;
  verifiedScore: number;
  completionStatus: CompletionStatus;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  floorPlanID: number | null;
  furnishingStatus: FurnishingStatus | null;
  extraFields: ExtraFields;
  type: HitType;
  hasTransactionHistory?: boolean;
  ownerAgent: OwnerAgent | null;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  hidePrice: boolean;
  locationPurposeTier: number;
  objectID: string;
  _highlightResult: HighlightResult;
  occupancyStatus?: string;
  coverVideo?: CoverVideo;
}

export interface Geo {
  lat: number;
  lng: number;
}

export interface HighlightResult {
  referenceNumber: ExternalID;
  title: ExternalID;
  externalID: ExternalID;
  agency: HighlightResultAgency;
  keywords: ExternalID[];
}

export interface HighlightResultAgency {
  name: ExternalID;
}

export interface ExternalID {
  value: string;
  matchLevel: MatchLevel;
  matchedWords: any[];
}

export enum MatchLevel {
  None = "none",
}

export interface HitAgency {
  id: number;
  objectID: number;
  name: string;
  name_l1: string;
  name_l2: string;
  externalID: string;
  product: AgencyProduct;
  productScore: number;
  licenses: License[];
  logo: Logo;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  tr: number;
  tier: number;
  roles: any[];
  active: boolean;
  createdAt: Date;
  commercialNumber: null;
  shortNumber: null;
}

export interface License {
  number: string;
  authority: Authority;
}

export enum Authority {
  Ded = "DED",
  Orn = "ORN",
}

export interface Logo {
  id: number;
  url: string;
}

export enum AgencyProduct {
  Premium = "premium",
}

export interface Category {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  name_l2: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  nameSingular?: NameSingular;
  nameSingular_l1?: NameSingularL1;
  nameSingular_l2?: NameSingular;
  type?: CategoryType;
}

export enum NameSingular {
  Apartment = "Apartment",
  Residential = "Residential",
}

export enum NameSingularL1 {
  سكني = "سكني",
  شقة = "شقة",
}

export enum CategoryType {
  CondoBuilding = "condo-building",
  Neighbourhood = "neighbourhood",
}

export enum CompletionStatus {
  Completed = "completed",
}

export interface CoverPhoto {
  id: number;
  externalID: string;
  title: null | string;
  orderIndex: number;
  nimaScore: number;
  url: string;
  main: boolean;
}

export interface CoverVideo {
  externalID: number;
  title: null | string;
  host: string;
  url: string;
  orderIndex: number;
}

export interface ExtraFields {
  dldBuildingNK?: string;
  dldPropertySK?: string;
}

export enum FurnishingStatus {
  Furnished = "furnished",
}

export interface OwnerAgent {
  externalID: string;
  name: string;
  name_l1: string;
  name_l2: string;
  user_image: null | string;
  user_image_id: number | null;
  isTruBroker: boolean;
}

export interface PhoneNumber {
  mobile: string;
  whatsapp?: string;
  proxyMobile?: string;
  mobileNumbers: string[];
  phone?: string;
  phoneNumbers?: string[];
  proxyPhone?: string;
}

export enum HitProduct {
  Hot = "hot",
  Superhot = "superhot",
}

export enum ProductLabel {
  Default = "default",
}

export enum Purpose {
  ForRent = "for-rent",
}

export enum RentFrequency {
  Monthly = "monthly",
}

export enum State {
  Active = "active",
}

export enum HitType {
  Property = "property",
}

export interface Verification {
  updatedAt: number;
  eligible: boolean;
  status: Status;
  verifiedAt: number;
}

export enum Status {
  Verified = "verified",
}

export interface ProcessingTimingsMS {
  afterFetch: AfterFetch;
  fetch: Fetch;
  getIdx: GetIdx;
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
  scanning: number;
  total: number;
}

export interface GetIdx {
  load: Load;
  total: number;
}

export interface Load {
  dicts: number;
  total: number;
}

export interface Request {
  roundTrip: number;
}
