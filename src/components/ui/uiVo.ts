export interface ITerm {
  state?: number
  start?: string
  end?: string
}

export enum UiCompanySelectType {
  CompanyType = '_companyType',
  Selected = '_selected',
}

export enum UiDateOptionGroupType {
  Start = '_start',
  End = '_end',
  Radio = '_radio',
}

export enum UiPostCodeType {
  ZoneCode = '_zonecode',
  FullAddress = '_fulladdress',
  AddressDetail = '_addressdetail',
}
