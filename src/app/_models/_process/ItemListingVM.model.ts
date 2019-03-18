export class ItemListingVM {

    Id: number
    Code: string
    DisplayName: string
    MakeId: number
    Make: string
    ModelId: number
    Model: string
    MilageId: number
    Milage: string
    Year: number
    YearName: string
    EngineCapacity: number
    Transmission: string
    FuelTyoe: string
    DoorCount: number
    SellingPrice: number
    IsValuationDone: boolean
}

export class ItemMater {
    Id: number
    Code: string
    DisplayName: string
    MakeId: number
    ModelId: number
    Year: number
    BodyTypeId: number
    Milage: number
    Option: number
    IsAuction: boolean
    IsPriceBargined: boolean
    IsValuationDone: boolean
    EstimatePrice: number
    CustomerPrice: number
    AuctionPrice: number
    SellingPrice: number
    ItemConditionRank: number
    EngineCapacity: number
    Transmission: string
    FuelTyoe: string
    DoorCount: number
    MoreDetails: string


}


export class ItemMaterSaveVM {
    Id: number
    CustomerId:number
    Email: string
    PhoneNumber:string
    DisplayName: string
    MakeId: number
    ModelId: number
    Year: number
    BodyTypeId: number
    Milage: number
    Option: number
    IsAuction: boolean
    IsPriceBargined: boolean
    IsValuationDone: boolean
    EstimatePrice: number
    CustomerPrice: number
    AuctionPrice: number
    SellingPrice: number
    ItemConditionRank: number
    EngineCapacity: number
    Transmission: string
    FuelTyoe: string
    DoorCount: number
    MoreDetails: string
}

export class ItemExtended {

    Id: number 
    ItemId: number
    SecuritySystem: boolean = true
    Airconditioning: boolean= true
    AlloyWheels: boolean= false
    ABS: boolean= false
    Anti_Theft: boolean= false
    Anti_Starter: boolean= false
    ExteriorColor: boolean= false
    InteriorColor: boolean= false
    Condition: string
    FogLights: boolean= false
    RearWindowDefroster: boolean= false
    TintedGlass: boolean= false
    SoundSystem: boolean= false
    CruiseControl: boolean= false
    PowerSteering: boolean= false
    MultifunctionSteering: boolean= false
    PowerWindows: boolean= false
    RearWindowWiper: boolean= false
    TemporarySpareTire: boolean= false
    PassengerVanityMirro: boolean= false
    TirePressureMonitor: boolean= false
    PowerMirror: boolean= false
    RearSpoiler: boolean= false
    BluetoothConnection: boolean= false
    AdjustableSteeringWheel: boolean= false
    TractionControl: boolean= false
    AirbagSide: boolean= false
    AirbagDriver: boolean= false
    AirbagPassenger: boolean= false
}

export class ItemSaveVM{
    ItemMaterSaveVM:ItemMaterSaveVM
    ItemExtended:ItemExtended
}