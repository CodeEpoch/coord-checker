const PROJS = {
  "EPSG:3819": [
    "HD1909",
    "+proj=longlat +ellps=bessel +towgs84=595.48,121.69,515.35,4.115,-2.9383,0.853,-3.408 +no_defs ",
  ],
  "EPSG:3821": ["TWD67", "+proj=longlat +ellps=aust_SA +no_defs "],
  "EPSG:3824": [
    "TWD97",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:3889": [
    "IGRS",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:3906": [
    "MGI 1901",
    "+proj=longlat +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +no_defs ",
  ],
  "EPSG:4001": [
    "Unknown datum based upon the Airy 1830 ellipsoid",
    "+proj=longlat +ellps=airy +no_defs ",
  ],
  "EPSG:4002": [
    "Unknown datum based upon the Airy Modified 1849 ellipsoid",
    "+proj=longlat +ellps=mod_airy +no_defs ",
  ],
  "EPSG:4003": [
    "Unknown datum based upon the Australian National Spheroid",
    "+proj=longlat +ellps=aust_SA +no_defs ",
  ],
  "EPSG:4004": [
    "Unknown datum based upon the Bessel 1841 ellipsoid",
    "+proj=longlat +ellps=bessel +no_defs ",
  ],
  "EPSG:4005": [
    "Unknown datum based upon the Bessel Modified ellipsoid",
    "+proj=longlat +a=6377492.018 +b=6356173.508712696 +no_defs ",
  ],
  "EPSG:4006": [
    "Unknown datum based upon the Bessel Namibia ellipsoid",
    "+proj=longlat +ellps=bess_nam +no_defs ",
  ],
  "EPSG:4007": [
    "Unknown datum based upon the Clarke 1858 ellipsoid",
    "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +no_defs ",
  ],
  "EPSG:4008": [
    "Unknown datum based upon the Clarke 1866 ellipsoid",
    "+proj=longlat +ellps=clrk66 +no_defs ",
  ],
  "EPSG:4009": [
    "Unknown datum based upon the Clarke 1866 Michigan ellipsoid",
    "+proj=longlat +a=6378450.047548896 +b=6356826.621488444 +no_defs ",
  ],
  "EPSG:4010": [
    "Unknown datum based upon the Clarke 1880 (Benoit) ellipsoid",
    "+proj=longlat +a=6378300.789 +b=6356566.435 +no_defs ",
  ],
  "EPSG:4011": [
    "Unknown datum based upon the Clarke 1880 (IGN) ellipsoid",
    "+proj=longlat +a=6378249.2 +b=6356515 +no_defs ",
  ],
  "EPSG:4012": [
    "Unknown datum based upon the Clarke 1880 (RGS) ellipsoid",
    "+proj=longlat +ellps=clrk80 +no_defs ",
  ],
  "EPSG:4013": [
    "Unknown datum based upon the Clarke 1880 (Arc) ellipsoid",
    "+proj=longlat +a=6378249.145 +b=6356514.966398753 +no_defs ",
  ],
  "EPSG:4014": [
    "Unknown datum based upon the Clarke 1880 (SGA 1922) ellipsoid",
    "+proj=longlat +a=6378249.2 +b=6356514.996941779 +no_defs ",
  ],
  "EPSG:4015": [
    "Unknown datum based upon the Everest 1830 (1937 Adjustment) ellipsoid",
    "+proj=longlat +a=6377276.345 +b=6356075.41314024 +no_defs ",
  ],
  "EPSG:4016": [
    "Unknown datum based upon the Everest 1830 (1967 Definition) ellipsoid",
    "+proj=longlat +ellps=evrstSS +no_defs ",
  ],
  "EPSG:4018": [
    "Unknown datum based upon the Everest 1830 Modified ellipsoid",
    "+proj=longlat +a=6377304.063 +b=6356103.038993155 +no_defs ",
  ],
  "EPSG:4019": [
    "Unknown datum based upon the GRS 1980 ellipsoid",
    "+proj=longlat +ellps=GRS80 +no_defs ",
  ],
  "EPSG:4020": [
    "Unknown datum based upon the Helmert 1906 ellipsoid",
    "+proj=longlat +ellps=helmert +no_defs ",
  ],
  "EPSG:4021": [
    "Unknown datum based upon the Indonesian National Spheroid",
    "+proj=longlat +a=6378160 +b=6356774.50408554 +no_defs ",
  ],
  "EPSG:4022": [
    "Unknown datum based upon the International 1924 ellipsoid",
    "+proj=longlat +ellps=intl +no_defs ",
  ],
  "EPSG:4023": ["MOLDREF99", "+proj=longlat +ellps=GRS80 +no_defs "],
  "EPSG:4024": [
    "Unknown datum based upon the Krassowsky 1940 ellipsoid",
    "+proj=longlat +ellps=krass +no_defs ",
  ],
  "EPSG:4025": [
    "Unknown datum based upon the NWL 9D ellipsoid",
    "+proj=longlat +ellps=WGS66 +no_defs ",
  ],
  "EPSG:4027": [
    "Unknown datum based upon the Plessis 1817 ellipsoid",
    "+proj=longlat +a=6376523 +b=6355862.933255573 +no_defs ",
  ],
  "EPSG:4028": [
    "Unknown datum based upon the Struve 1860 ellipsoid",
    "+proj=longlat +a=6378298.3 +b=6356657.142669561 +no_defs ",
  ],
  "EPSG:4029": [
    "Unknown datum based upon the War Office ellipsoid",
    "+proj=longlat +a=6378300 +b=6356751.689189189 +no_defs ",
  ],
  "EPSG:4030": [
    "Unknown datum based upon the WGS 84 ellipsoid",
    "+proj=longlat +ellps=WGS84 +no_defs ",
  ],
  "EPSG:4031": [
    "Unknown datum based upon the GEM 10C ellipsoid",
    "+proj=longlat +ellps=WGS84 +no_defs ",
  ],
  "EPSG:4032": [
    "Unknown datum based upon the OSU86F ellipsoid",
    "+proj=longlat +a=6378136.2 +b=6356751.516927429 +no_defs ",
  ],
  "EPSG:4033": [
    "Unknown datum based upon the OSU91A ellipsoid",
    "+proj=longlat +a=6378136.3 +b=6356751.616592146 +no_defs ",
  ],
  "EPSG:4034": [
    "Unknown datum based upon the Clarke 1880 ellipsoid",
    "+proj=longlat +a=6378249.144808011 +b=6356514.966204134 +no_defs ",
  ],
  "EPSG:4035": [
    "Unknown datum based upon the Authalic Sphere",
    "+proj=longlat +a=6371000 +b=6371000 +no_defs ",
  ],
  "EPSG:4036": [
    "Unknown datum based upon the GRS 1967 ellipsoid",
    "+proj=longlat +ellps=GRS67 +no_defs ",
  ],
  "EPSG:4041": [
    "Unknown datum based upon the Average Terrestrial System 1977 ellipsoid",
    "+proj=longlat +a=6378135 +b=6356750.304921594 +no_defs ",
  ],
  "EPSG:4042": [
    "Unknown datum based upon the Everest (1830 Definition) ellipsoid",
    "+proj=longlat +a=6377299.36559538 +b=6356098.359005156 +no_defs ",
  ],
  "EPSG:4043": [
    "Unknown datum based upon the WGS 72 ellipsoid",
    "+proj=longlat +ellps=WGS72 +no_defs ",
  ],
  "EPSG:4044": [
    "Unknown datum based upon the Everest 1830 (1962 Definition) ellipsoid",
    "+proj=longlat +a=6377301.243 +b=6356100.230165384 +no_defs ",
  ],
  "EPSG:4045": [
    "Unknown datum based upon the Everest 1830 (1975 Definition) ellipsoid",
    "+proj=longlat +a=6377299.151 +b=6356098.145120132 +no_defs ",
  ],
  "EPSG:4046": [
    "RGRDC 2005",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4047": [
    "Unspecified datum based upon the GRS 1980 Authalic Sphere",
    "+proj=longlat +a=6371007 +b=6371007 +no_defs ",
  ],
  "EPSG:4052": [
    "Unspecified datum based upon the Clarke 1866 Authalic Sphere",
    "+proj=longlat +a=6370997 +b=6370997 +no_defs ",
  ],
  "EPSG:4053": [
    "Unspecified datum based upon the International 1924 Authalic Sphere",
    "+proj=longlat +a=6371228 +b=6371228 +no_defs ",
  ],
  "EPSG:4054": [
    "Unspecified datum based upon the Hughes 1980 ellipsoid",
    "+proj=longlat +a=6378273 +b=6356889.449 +no_defs ",
  ],
  "EPSG:4055": [
    "Popular Visualisation CRS",
    "+proj=longlat +a=6378137 +b=6378137 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4075": [
    "SREF98",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4081": [
    "REGCAN95",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4120": ["Greek", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4121": [
    "GGRS87",
    "+proj=longlat +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +no_defs ",
  ],
  "EPSG:4122": [
    "ATS77",
    "+proj=longlat +a=6378135 +b=6356750.304921594 +no_defs ",
  ],
  "EPSG:4123": [
    "KKJ",
    "+proj=longlat +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +no_defs ",
  ],
  "EPSG:4124": [
    "RT90",
    "+proj=longlat +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +no_defs ",
  ],
  "EPSG:4125": [
    "Samboja",
    "+proj=longlat +ellps=bessel +towgs84=-404.78,685.68,45.47,0,0,0,0 +no_defs ",
  ],
  "EPSG:4126": ["LKS94 (ETRS89)", "+proj=longlat +ellps=GRS80 +no_defs "],
  "EPSG:4127": [
    "Tete",
    "+proj=longlat +ellps=clrk66 +towgs84=219.315,168.975,-166.145,0.198,5.926,-2.356,-57.104 +no_defs ",
  ],
  "EPSG:4128": ["Madzansua", "+proj=longlat +ellps=clrk66 +no_defs "],
  "EPSG:4129": ["Observatario", "+proj=longlat +ellps=clrk66 +no_defs "],
  "EPSG:4130": [
    "Moznet",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,-0,-0,-0,0 +no_defs ",
  ],
  "EPSG:4131": [
    "Indian 1960",
    "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +no_defs ",
  ],
  "EPSG:4132": [
    "FD58",
    "+proj=longlat +ellps=clrk80 +towgs84=-239.1,-170.02,397.5,0,0,0,0 +no_defs ",
  ],
  "EPSG:4133": [
    "EST92",
    "+proj=longlat +ellps=GRS80 +towgs84=0.055,-0.541,-0.185,0.0183,-0.0003,-0.007,-0.014 +no_defs ",
  ],
  "EPSG:4134": [
    "PSD93",
    "+proj=longlat +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.7101 +no_defs ",
  ],
  "EPSG:4135": [
    "Old Hawaiian",
    "+proj=longlat +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +no_defs ",
  ],
  "EPSG:4136": ["St. Lawrence Island", "+proj=longlat +ellps=clrk66 +no_defs "],
  "EPSG:4137": ["St. Paul Island", "+proj=longlat +ellps=clrk66 +no_defs "],
  "EPSG:4138": ["St. George Island", "+proj=longlat +ellps=clrk66 +no_defs "],
  "EPSG:4139": [
    "Puerto Rico",
    "+proj=longlat +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +no_defs ",
  ],
  "EPSG:4140": [
    "NAD83(CSRS98)",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4141": [
    "Israel",
    "+proj=longlat +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +no_defs ",
  ],
  "EPSG:4142": [
    "Locodjo 1965",
    "+proj=longlat +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +no_defs ",
  ],
  "EPSG:4143": [
    "Abidjan 1987",
    "+proj=longlat +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +no_defs ",
  ],
  "EPSG:4144": [
    "Kalianpur 1937",
    "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=282,726,254,0,0,0,0 +no_defs ",
  ],
  "EPSG:4145": [
    "Kalianpur 1962",
    "+proj=longlat +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +no_defs ",
  ],
  "EPSG:4146": [
    "Kalianpur 1975",
    "+proj=longlat +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +no_defs ",
  ],
  "EPSG:4147": [
    "Hanoi 1972",
    "+proj=longlat +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +no_defs ",
  ],
  "EPSG:4148": [
    "Hartebeesthoek94",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4149": [
    "CH1903",
    "+proj=longlat +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +no_defs ",
  ],
  "EPSG:4150": [
    "CH1903+",
    "+proj=longlat +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +no_defs ",
  ],
  "EPSG:4151": [
    "CHTRF95",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4152": [
    "NAD83(HARN)",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4153": [
    "Rassadiran",
    "+proj=longlat +ellps=intl +towgs84=-133.63,-157.5,-158.62,0,0,0,0 +no_defs ",
  ],
  "EPSG:4154": [
    "ED50(ED77)",
    "+proj=longlat +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +no_defs ",
  ],
  "EPSG:4155": [
    "Dabola 1981",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-83,37,124,0,0,0,0 +no_defs ",
  ],
  "EPSG:4156": [
    "S-JTSK",
    "+proj=longlat +ellps=bessel +towgs84=589,76,480,0,0,0,0 +no_defs ",
  ],
  "EPSG:4157": [
    "Mount Dillon",
    "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +no_defs ",
  ],
  "EPSG:4158": [
    "Naparima 1955",
    "+proj=longlat +ellps=intl +towgs84=-0.465,372.095,171.736,0,0,0,0 +no_defs ",
  ],
  "EPSG:4318": [
    "NGN",
    "+proj=longlat +ellps=WGS84 +towgs84=-3.2,-5.7,2.8,0,0,0,0 +no_defs ",
  ],
  "EPSG:4159": [
    "ELD79",
    "+proj=longlat +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +no_defs ",
  ],
  "EPSG:4160": ["Chos Malal 1914", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4161": [
    "Pampa del Castillo",
    "+proj=longlat +ellps=intl +towgs84=27.5,14,186.4,0,0,0,0 +no_defs ",
  ],
  "EPSG:4162": ["Korean 1985", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4163": [
    "Yemen NGN96",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4164": [
    "South Yemen",
    "+proj=longlat +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +no_defs ",
  ],
  "EPSG:4165": [
    "Bissau",
    "+proj=longlat +ellps=intl +towgs84=-173,253,27,0,0,0,0 +no_defs ",
  ],
  "EPSG:4166": [
    "Korean 1995",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4167": [
    "NZGD2000",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4168": [
    "Accra",
    "+proj=longlat +a=6378300 +b=6356751.689189189 +towgs84=-199,32,322,0,0,0,0 +no_defs ",
  ],
  "EPSG:4169": [
    "American Samoa 1962",
    "+proj=longlat +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +no_defs ",
  ],
  "EPSG:4170": [
    "SIRGAS 1995",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4171": [
    "RGF93",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4172": [
    "POSGAR",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4173": [
    "IRENET95",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4174": [
    "Sierra Leone 1924",
    "+proj=longlat +a=6378300 +b=6356751.689189189 +no_defs ",
  ],
  "EPSG:4175": [
    "Sierra Leone 1968",
    "+proj=longlat +ellps=clrk80 +towgs84=-88,4,101,0,0,0,0 +no_defs ",
  ],
  "EPSG:4176": [
    "Australian Antarctic",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4178": [
    "Pulkovo 1942(83)",
    "+proj=longlat +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +no_defs ",
  ],
  "EPSG:4179": [
    "Pulkovo 1942(58)",
    "+proj=longlat +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +no_defs ",
  ],
  "EPSG:4180": [
    "EST97",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4181": [
    "Luxembourg 1930",
    "+proj=longlat +ellps=intl +towgs84=-193,13.7,-39.3,-0.41,-2.933,2.688,0.43 +no_defs ",
  ],
  "EPSG:4182": [
    "Azores Occidental 1939",
    "+proj=longlat +ellps=intl +towgs84=-425,-169,81,0,0,0,0 +no_defs ",
  ],
  "EPSG:4183": [
    "Azores Central 1948",
    "+proj=longlat +ellps=intl +towgs84=-104,167,-38,0,0,0,0 +no_defs ",
  ],
  "EPSG:4184": [
    "Azores Oriental 1940",
    "+proj=longlat +ellps=intl +towgs84=-203,141,53,0,0,0,0 +no_defs ",
  ],
  "EPSG:4185": ["Madeira 1936", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4188": [
    "OSNI 1952",
    "+proj=longlat +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +no_defs ",
  ],
  "EPSG:4189": [
    "REGVEN",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4190": [
    "POSGAR 98",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4191": ["Albanian 1987", "+proj=longlat +ellps=krass +no_defs "],
  "EPSG:4192": [
    "Douala 1948",
    "+proj=longlat +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +no_defs ",
  ],
  "EPSG:4193": [
    "Manoca 1962",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +no_defs ",
  ],
  "EPSG:4194": [
    "Qornoq 1927",
    "+proj=longlat +ellps=intl +towgs84=163.511,127.533,-159.789,0,0,0.814,-0.6 +no_defs ",
  ],
  "EPSG:4195": [
    "Scoresbysund 1952",
    "+proj=longlat +ellps=intl +towgs84=105,326,-102.5,0,0,0.814,-0.6 +no_defs ",
  ],
  "EPSG:4196": [
    "Ammassalik 1958",
    "+proj=longlat +ellps=intl +towgs84=-45,417,-3.5,0,0,0.814,-0.6 +no_defs ",
  ],
  "EPSG:4197": ["Garoua", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4198": ["Kousseri", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4199": ["Egypt 1930", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4200": [
    "Pulkovo 1995",
    "+proj=longlat +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +no_defs ",
  ],
  "EPSG:4201": [
    "Adindan",
    "+proj=longlat +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +no_defs ",
  ],
  "EPSG:4202": [
    "AGD66",
    "+proj=longlat +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +no_defs ",
  ],
  "EPSG:4203": [
    "AGD84",
    "+proj=longlat +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +no_defs ",
  ],
  "EPSG:4204": [
    "Ain el Abd",
    "+proj=longlat +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +no_defs ",
  ],
  "EPSG:4205": [
    "Afgooye",
    "+proj=longlat +ellps=krass +towgs84=-43,-163,45,0,0,0,0 +no_defs ",
  ],
  "EPSG:4206": ["Agadez", "+proj=longlat +a=6378249.2 +b=6356515 +no_defs "],
  "EPSG:4207": [
    "Lisbon",
    "+proj=longlat +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +no_defs ",
  ],
  "EPSG:4208": [
    "Aratu",
    "+proj=longlat +ellps=intl +towgs84=-161,308,-142,0,0,0,0 +no_defs ",
  ],
  "EPSG:4209": [
    "Arc 1950",
    "+proj=longlat +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +no_defs ",
  ],
  "EPSG:4210": [
    "Arc 1960",
    "+proj=longlat +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +no_defs ",
  ],
  "EPSG:4211": [
    "Batavia",
    "+proj=longlat +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +no_defs ",
  ],
  "EPSG:4212": [
    "Barbados 1938",
    "+proj=longlat +ellps=clrk80 +towgs84=31.95,300.99,419.19,0,0,0,0 +no_defs ",
  ],
  "EPSG:4213": [
    "Beduaram",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-106,-87,188,0,0,0,0 +no_defs ",
  ],
  "EPSG:4214": [
    "Beijing 1954",
    "+proj=longlat +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +no_defs ",
  ],
  "EPSG:4215": ["Belge 1950", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4216": [
    "Bermuda 1957",
    "+proj=longlat +ellps=clrk66 +towgs84=-73,213,296,0,0,0,0 +no_defs ",
  ],
  "EPSG:4218": [
    "Bogota 1975",
    "+proj=longlat +ellps=intl +towgs84=307,304,-318,0,0,0,0 +no_defs ",
  ],
  "EPSG:4219": [
    "Bukit Rimpah",
    "+proj=longlat +ellps=bessel +towgs84=-384,664,-48,0,0,0,0 +no_defs ",
  ],
  "EPSG:4220": [
    "Camacupa",
    "+proj=longlat +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +no_defs ",
  ],
  "EPSG:4221": [
    "Campo Inchauspe",
    "+proj=longlat +ellps=intl +towgs84=-148,136,90,0,0,0,0 +no_defs ",
  ],
  "EPSG:4222": [
    "Cape",
    "+proj=longlat +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +no_defs ",
  ],
  "EPSG:4223": [
    "Carthage",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-263,6,431,0,0,0,0 +no_defs ",
  ],
  "EPSG:4224": [
    "Chua",
    "+proj=longlat +ellps=intl +towgs84=-134,229,-29,0,0,0,0 +no_defs ",
  ],
  "EPSG:4225": [
    "Corrego Alegre",
    "+proj=longlat +ellps=intl +towgs84=-206,172,-6,0,0,0,0 +no_defs ",
  ],
  "EPSG:4226": [
    "Cote dIvoire",
    "+proj=longlat +a=6378249.2 +b=6356515 +no_defs ",
  ],
  "EPSG:4227": [
    "Deir ez Zor",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +no_defs ",
  ],
  "EPSG:4228": ["Douala", "+proj=longlat +a=6378249.2 +b=6356515 +no_defs "],
  "EPSG:4229": [
    "Egypt 1907",
    "+proj=longlat +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +no_defs ",
  ],
  "EPSG:4230": [
    "ED50",
    "+proj=longlat +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +no_defs ",
  ],
  "EPSG:4231": [
    "ED87",
    "+proj=longlat +ellps=intl +towgs84=-83.11,-97.38,-117.22,0.00569291,-0.0446976,0.0442851,0.1218 +no_defs ",
  ],
  "EPSG:4232": [
    "Fahud",
    "+proj=longlat +ellps=clrk80 +towgs84=-346,-1,224,0,0,0,0 +no_defs ",
  ],
  "EPSG:4233": [
    "Gandajika 1970",
    "+proj=longlat +ellps=intl +towgs84=-133,-321,50,0,0,0,0 +no_defs ",
  ],
  "EPSG:4234": ["Garoua", "+proj=longlat +a=6378249.2 +b=6356515 +no_defs "],
  "EPSG:4235": ["Guyane Francaise", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4236": [
    "Hu Tzu Shan 1950",
    "+proj=longlat +ellps=intl +towgs84=-637,-549,-203,0,0,0,0 +no_defs ",
  ],
  "EPSG:4237": [
    "HD72",
    "+proj=longlat +ellps=GRS67 +towgs84=52.17,-71.82,-14.9,0,0,0,0 +no_defs ",
  ],
  "EPSG:4238": [
    "ID74",
    "+proj=longlat +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +no_defs ",
  ],
  "EPSG:4239": [
    "Indian 1954",
    "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +no_defs ",
  ],
  "EPSG:4240": [
    "Indian 1975",
    "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=210,814,289,0,0,0,0 +no_defs ",
  ],
  "EPSG:4241": [
    "Jamaica 1875",
    "+proj=longlat +a=6378249.144808011 +b=6356514.966204134 +no_defs ",
  ],
  "EPSG:4242": [
    "JAD69",
    "+proj=longlat +ellps=clrk66 +towgs84=70,207,389.5,0,0,0,0 +no_defs ",
  ],
  "EPSG:4243": [
    "Kalianpur 1880",
    "+proj=longlat +a=6377299.36559538 +b=6356098.359005156 +no_defs ",
  ],
  "EPSG:4244": [
    "Kandawala",
    "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=-97,787,86,0,0,0,0 +no_defs ",
  ],
  "EPSG:4245": [
    "Kertau 1968",
    "+proj=longlat +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +no_defs ",
  ],
  "EPSG:4246": [
    "KOC",
    "+proj=longlat +ellps=clrk80 +towgs84=-294.7,-200.1,525.5,0,0,0,0 +no_defs ",
  ],
  "EPSG:4247": [
    "La Canoa",
    "+proj=longlat +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +no_defs ",
  ],
  "EPSG:4248": [
    "PSAD56",
    "+proj=longlat +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +no_defs ",
  ],
  "EPSG:4249": ["Lake", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4250": [
    "Leigon",
    "+proj=longlat +ellps=clrk80 +towgs84=-130,29,364,0,0,0,0 +no_defs ",
  ],
  "EPSG:4251": [
    "Liberia 1964",
    "+proj=longlat +ellps=clrk80 +towgs84=-90,40,88,0,0,0,0 +no_defs ",
  ],
  "EPSG:4252": ["Lome", "+proj=longlat +a=6378249.2 +b=6356515 +no_defs "],
  "EPSG:4253": [
    "Luzon 1911",
    "+proj=longlat +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +no_defs ",
  ],
  "EPSG:4254": [
    "Hito XVIII 1963",
    "+proj=longlat +ellps=intl +towgs84=16,196,93,0,0,0,0 +no_defs ",
  ],
  "EPSG:4255": [
    "Herat North",
    "+proj=longlat +ellps=intl +towgs84=-333,-222,114,0,0,0,0 +no_defs ",
  ],
  "EPSG:4256": [
    "Mahe 1971",
    "+proj=longlat +ellps=clrk80 +towgs84=41,-220,-134,0,0,0,0 +no_defs ",
  ],
  "EPSG:4257": [
    "Makassar",
    "+proj=longlat +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +no_defs ",
  ],
  "EPSG:4258": [
    "ETRS89",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4259": [
    "Malongo 1987",
    "+proj=longlat +ellps=intl +towgs84=-254.1,-5.36,-100.29,0,0,0,0 +no_defs ",
  ],
  "EPSG:4260": [
    "Manoca",
    "+proj=longlat +ellps=clrk80 +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +no_defs ",
  ],
  "EPSG:4261": [
    "Merchich",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +no_defs ",
  ],
  "EPSG:4262": [
    "Massawa",
    "+proj=longlat +ellps=bessel +towgs84=639,405,60,0,0,0,0 +no_defs ",
  ],
  "EPSG:4263": [
    "Minna",
    "+proj=longlat +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +no_defs ",
  ],
  "EPSG:4264": [
    "Mhast",
    "+proj=longlat +ellps=intl +towgs84=-252.95,-4.11,-96.38,0,0,0,0 +no_defs ",
  ],
  "EPSG:4265": [
    "Monte Mario",
    "+proj=longlat +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +no_defs ",
  ],
  "EPSG:4266": [
    "Mporaloko",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-74,-130,42,0,0,0,0 +no_defs ",
  ],
  "EPSG:4267": ["NAD27", "+proj=longlat +datum=NAD27 +no_defs "],
  "EPSG:4268": [
    "NAD27 Michigan",
    "+proj=longlat +a=6378450.047548896 +b=6356826.621488444 +no_defs ",
  ],
  "EPSG:4269": [
    "NAD83",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4270": [
    "Nahrwan 1967",
    "+proj=longlat +ellps=clrk80 +towgs84=-243,-192,477,0,0,0,0 +no_defs ",
  ],
  "EPSG:4271": [
    "Naparima 1972",
    "+proj=longlat +ellps=intl +towgs84=-10,375,165,0,0,0,0 +no_defs ",
  ],
  "EPSG:4272": [
    "NZGD49",
    "+proj=longlat +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +no_defs ",
  ],
  "EPSG:4273": [
    "NGO 1948",
    "+proj=longlat +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +no_defs ",
  ],
  "EPSG:4274": [
    "Datum 73",
    "+proj=longlat +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +no_defs ",
  ],
  "EPSG:4275": [
    "NTF",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +no_defs ",
  ],
  "EPSG:4276": ["NSWC 9Z-2", "+proj=longlat +ellps=WGS66 +no_defs "],
  "EPSG:4277": [
    "OSGB 1936",
    "+proj=longlat +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +no_defs ",
  ],
  "EPSG:4278": ["OSGB70", "+proj=longlat +ellps=airy +no_defs "],
  "EPSG:4279": ["OS(SN)80", "+proj=longlat +ellps=airy +no_defs "],
  "EPSG:4280": ["Padang", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4281": [
    "Palestine 1923",
    "+proj=longlat +a=6378300.789 +b=6356566.435 +towgs84=-275.722,94.7824,340.894,-8.001,-4.42,-11.821,1 +no_defs ",
  ],
  "EPSG:4282": [
    "Pointe Noire",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-148,51,-291,0,0,0,0 +no_defs ",
  ],
  "EPSG:4283": [
    "GDA94",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4284": [
    "Pulkovo 1942",
    "+proj=longlat +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +no_defs ",
  ],
  "EPSG:4285": [
    "Qatar 1974",
    "+proj=longlat +ellps=intl +towgs84=-128,-283,22,0,0,0,0 +no_defs ",
  ],
  "EPSG:4286": ["Qatar 1948", "+proj=longlat +ellps=helmert +no_defs "],
  "EPSG:4287": [
    "Qornoq",
    "+proj=longlat +ellps=intl +towgs84=164,138,-189,0,0,0,0 +no_defs ",
  ],
  "EPSG:4288": ["Loma Quintana", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4289": [
    "Amersfoort",
    "+proj=longlat +ellps=bessel +towgs84=565.417,50.3319,465.552,-0.398957,0.343988,-1.8774,4.0725 +no_defs ",
  ],
  "EPSG:4291": [
    "SAD69",
    "+proj=longlat +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +no_defs ",
  ],
  "EPSG:4292": [
    "Sapper Hill 1943",
    "+proj=longlat +ellps=intl +towgs84=-355,21,72,0,0,0,0 +no_defs ",
  ],
  "EPSG:4293": [
    "Schwarzeck",
    "+proj=longlat +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +no_defs ",
  ],
  "EPSG:4294": [
    "Segora",
    "+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +no_defs ",
  ],
  "EPSG:4295": ["Serindung", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4296": ["Sudan", "+proj=longlat +a=6378249.2 +b=6356515 +no_defs "],
  "EPSG:4297": [
    "Tananarive",
    "+proj=longlat +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +no_defs ",
  ],
  "EPSG:4298": [
    "Timbalai 1948",
    "+proj=longlat +ellps=evrstSS +towgs84=-533.4,669.2,-52.5,0,0,4.28,9.4 +no_defs ",
  ],
  "EPSG:4299": [
    "TM65",
    "+proj=longlat +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +no_defs ",
  ],
  "EPSG:4300": [
    "TM75",
    "+proj=longlat +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +no_defs ",
  ],
  "EPSG:4301": [
    "Tokyo",
    "+proj=longlat +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +no_defs ",
  ],
  "EPSG:4302": [
    "Trinidad 1903",
    "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +towgs84=-61.702,284.488,472.052,0,0,0,0 +no_defs ",
  ],
  "EPSG:4303": ["TC(1948)", "+proj=longlat +ellps=helmert +no_defs "],
  "EPSG:4304": [
    "Voirol 1875",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +no_defs ",
  ],
  "EPSG:4306": ["Bern 1938", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4307": [
    "Nord Sahara 1959",
    "+proj=longlat +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +no_defs ",
  ],
  "EPSG:4308": ["RT38", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4309": [
    "Yacare",
    "+proj=longlat +ellps=intl +towgs84=-155,171,37,0,0,0,0 +no_defs ",
  ],
  "EPSG:4310": ["Yoff", "+proj=longlat +a=6378249.2 +b=6356515 +no_defs "],
  "EPSG:4311": [
    "Zanderij",
    "+proj=longlat +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +no_defs ",
  ],
  "EPSG:4312": [
    "MGI",
    "+proj=longlat +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +no_defs ",
  ],
  "EPSG:4313": [
    "Belge 1972",
    "+proj=longlat +ellps=intl +towgs84=-106.869,52.2978,-103.724,0.3366,-0.457,1.8422,1.2747 +no_defs ",
  ],
  "EPSG:4314": [
    "DHDN",
    "+proj=longlat +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +no_defs ",
  ],
  "EPSG:4315": [
    "Conakry 1905",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +no_defs ",
  ],
  "EPSG:4316": [
    "Dealul Piscului 1930",
    "+proj=longlat +ellps=intl +towgs84=103.25,-100.4,-307.19,0,0,0,0 +no_defs ",
  ],
  "EPSG:4317": [
    "Dealul Piscului 1970",
    "+proj=longlat +ellps=krass +towgs84=28,-121,-77,0,0,0,0 +no_defs ",
  ],
  "EPSG:4319": [
    "KUDAMS",
    "+proj=longlat +ellps=GRS80 +towgs84=-20.8,11.3,2.4,0,0,0,0 +no_defs ",
  ],
  "EPSG:4322": [
    "WGS 72",
    "+proj=longlat +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +no_defs ",
  ],
  "EPSG:4324": [
    "WGS 72BE",
    "+proj=longlat +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +no_defs ",
  ],
  "EPSG:4326": ["WGS 84", "+proj=longlat +datum=WGS84 +no_defs "],
  "EPSG:4463": [
    "RGSPM06",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4470": [
    "RGM04",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4475": [
    "Cadastre 1997",
    "+proj=longlat +ellps=intl +towgs84=-381.788,-57.501,-256.673,0,0,0,0 +no_defs ",
  ],
  "EPSG:4483": [
    "Mexican Datum of 1993",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4490": [
    "China Geodetic Coordinate System 2000",
    "+proj=longlat +ellps=GRS80 +no_defs ",
  ],
  "EPSG:4555": ["New Beijing", "+proj=longlat +ellps=krass +no_defs "],
  "EPSG:4558": [
    "RRAF 1991",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4600": ["Anguilla 1957", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4601": [
    "Antigua 1943",
    "+proj=longlat +ellps=clrk80 +towgs84=-255,-15,71,0,0,0,0 +no_defs ",
  ],
  "EPSG:4602": [
    "Dominica 1945",
    "+proj=longlat +ellps=clrk80 +towgs84=725,685,536,0,0,0,0 +no_defs ",
  ],
  "EPSG:4603": [
    "Grenada 1953",
    "+proj=longlat +ellps=clrk80 +towgs84=72,213.7,93,0,0,0,0 +no_defs ",
  ],
  "EPSG:4604": [
    "Montserrat 1958",
    "+proj=longlat +ellps=clrk80 +towgs84=174,359,365,0,0,0,0 +no_defs ",
  ],
  "EPSG:4605": [
    "St. Kitts 1955",
    "+proj=longlat +ellps=clrk80 +towgs84=9,183,236,0,0,0,0 +no_defs ",
  ],
  "EPSG:4606": [
    "St. Lucia 1955",
    "+proj=longlat +ellps=clrk80 +towgs84=-149,128,296,0,0,0,0 +no_defs ",
  ],
  "EPSG:4607": [
    "St. Vincent 1945",
    "+proj=longlat +ellps=clrk80 +towgs84=195.671,332.517,274.607,0,0,0,0 +no_defs ",
  ],
  "EPSG:4608": ["NAD27(76)", "+proj=longlat +ellps=clrk66 +no_defs "],
  "EPSG:4609": ["NAD27(CGQ77)", "+proj=longlat +ellps=clrk66 +no_defs "],
  "EPSG:4610": [
    "Xian 1980",
    "+proj=longlat +a=6378140 +b=6356755.288157528 +no_defs ",
  ],
  "EPSG:4611": [
    "Hong Kong 1980",
    "+proj=longlat +ellps=intl +towgs84=-162.619,-276.959,-161.764,0.067753,-2.24365,-1.15883,-1.09425 +no_defs ",
  ],
  "EPSG:4612": [
    "JGD2000",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4613": [
    "Segara",
    "+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +no_defs ",
  ],
  "EPSG:4614": [
    "QND95",
    "+proj=longlat +ellps=intl +towgs84=-119.425,-303.659,-11.0006,1.1643,0.174458,1.09626,3.65706 +no_defs ",
  ],
  "EPSG:4615": [
    "Porto Santo",
    "+proj=longlat +ellps=intl +towgs84=-499,-249,314,0,0,0,0 +no_defs ",
  ],
  "EPSG:4616": [
    "Selvagem Grande",
    "+proj=longlat +ellps=intl +towgs84=-289,-124,60,0,0,0,0 +no_defs ",
  ],
  "EPSG:4617": [
    "NAD83(CSRS)",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4618": [
    "SAD69",
    "+proj=longlat +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +no_defs ",
  ],
  "EPSG:4619": [
    "SWEREF99",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4620": [
    "Point 58",
    "+proj=longlat +ellps=clrk80 +towgs84=-106,-129,165,0,0,0,0 +no_defs ",
  ],
  "EPSG:4621": [
    "Fort Marigot",
    "+proj=longlat +ellps=intl +towgs84=137,248,-430,0,0,0,0 +no_defs ",
  ],
  "EPSG:4622": [
    "Guadeloupe 1948",
    "+proj=longlat +ellps=intl +towgs84=-467,-16,-300,0,0,0,0 +no_defs ",
  ],
  "EPSG:4623": [
    "CSG67",
    "+proj=longlat +ellps=intl +towgs84=-186,230,110,0,0,0,0 +no_defs ",
  ],
  "EPSG:4624": [
    "RGFG95",
    "+proj=longlat +ellps=GRS80 +towgs84=2,2,-2,0,0,0,0 +no_defs ",
  ],
  "EPSG:4625": [
    "Martinique 1938",
    "+proj=longlat +ellps=intl +towgs84=186,482,151,0,0,0,0 +no_defs ",
  ],
  "EPSG:4626": [
    "Reunion 1947",
    "+proj=longlat +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +no_defs ",
  ],
  "EPSG:4627": [
    "RGR92",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4628": [
    "Tahiti 52",
    "+proj=longlat +ellps=intl +towgs84=162,117,154,0,0,0,0 +no_defs ",
  ],
  "EPSG:4629": [
    "Tahaa 54",
    "+proj=longlat +ellps=intl +towgs84=72.438,345.918,79.486,1.6045,0.8823,0.5565,1.3746 +no_defs ",
  ],
  "EPSG:4630": [
    "IGN72 Nuku Hiva",
    "+proj=longlat +ellps=intl +towgs84=84,274,65,0,0,0,0 +no_defs ",
  ],
  "EPSG:4631": [
    "K0 1949",
    "+proj=longlat +ellps=intl +towgs84=145,-187,103,0,0,0,0 +no_defs ",
  ],
  "EPSG:4632": [
    "Combani 1950",
    "+proj=longlat +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +no_defs ",
  ],
  "EPSG:4633": [
    "IGN56 Lifou",
    "+proj=longlat +ellps=intl +towgs84=335.47,222.58,-230.94,0,0,0,0 +no_defs ",
  ],
  "EPSG:4634": [
    "IGN72 Grand Terre",
    "+proj=longlat +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +no_defs ",
  ],
  "EPSG:4635": [
    "ST87 Ouvea",
    "+proj=longlat +ellps=intl +towgs84=-122.383,-188.696,103.344,3.5107,-4.9668,-5.7047,4.4798 +no_defs ",
  ],
  "EPSG:4636": [
    "Petrels 1972",
    "+proj=longlat +ellps=intl +towgs84=365,194,166,0,0,0,0 +no_defs ",
  ],
  "EPSG:4637": [
    "Perroud 1950",
    "+proj=longlat +ellps=intl +towgs84=325,154,172,0,0,0,0 +no_defs ",
  ],
  "EPSG:4638": [
    "Saint Pierre et Miquelon 1950",
    "+proj=longlat +ellps=clrk66 +towgs84=30,430,368,0,0,0,0 +no_defs ",
  ],
  "EPSG:4639": [
    "MOP78",
    "+proj=longlat +ellps=intl +towgs84=253,-132,-127,0,0,0,0 +no_defs ",
  ],
  "EPSG:4640": [
    "RRAF 1991",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4641": [
    "IGN53 Mare",
    "+proj=longlat +ellps=intl +towgs84=287.58,177.78,-135.41,0,0,0,0 +no_defs ",
  ],
  "EPSG:4642": [
    "ST84 Ile des Pins",
    "+proj=longlat +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +no_defs ",
  ],
  "EPSG:4643": [
    "ST71 Belep",
    "+proj=longlat +ellps=intl +towgs84=-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7 +no_defs ",
  ],
  "EPSG:4644": [
    "NEA74 Noumea",
    "+proj=longlat +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +no_defs ",
  ],
  "EPSG:4645": [
    "RGNC 1991",
    "+proj=longlat +ellps=intl +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4646": ["Grand Comoros", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4657": [
    "Reykjavik 1900",
    "+proj=longlat +a=6377019.27 +b=6355762.5391 +towgs84=-28,199,5,0,0,0,0 +no_defs ",
  ],
  "EPSG:4658": [
    "Hjorsey 1955",
    "+proj=longlat +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +no_defs ",
  ],
  "EPSG:4659": [
    "ISN93",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4660": [
    "Helle 1954",
    "+proj=longlat +ellps=intl +towgs84=982.609,552.753,-540.873,6.68163,-31.6115,-19.8482,16.805 +no_defs ",
  ],
  "EPSG:4661": [
    "LKS92",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4662": [
    "IGN72 Grande Terre",
    "+proj=longlat +ellps=intl +towgs84=-11.64,-348.6,291.98,0,0,0,0 +no_defs ",
  ],
  "EPSG:4663": [
    "Porto Santo 1995",
    "+proj=longlat +ellps=intl +towgs84=-502.862,-247.438,312.724,0,0,0,0 +no_defs ",
  ],
  "EPSG:4664": [
    "Azores Oriental 1995",
    "+proj=longlat +ellps=intl +towgs84=-204.619,140.176,55.226,0,0,0,0 +no_defs ",
  ],
  "EPSG:4665": [
    "Azores Central 1995",
    "+proj=longlat +ellps=intl +towgs84=-106.226,166.366,-37.893,0,0,0,0 +no_defs ",
  ],
  "EPSG:4666": [
    "Lisbon 1890",
    "+proj=longlat +ellps=bessel +towgs84=508.088,-191.042,565.223,0,0,0,0 +no_defs ",
  ],
  "EPSG:4667": [
    "IKBD-92",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4668": [
    "ED79",
    "+proj=longlat +ellps=intl +towgs84=-86,-98,-119,0,0,0,0 +no_defs ",
  ],
  "EPSG:4669": [
    "LKS94",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4670": [
    "IGM95",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4671": [
    "Voirol 1879",
    "+proj=longlat +a=6378249.2 +b=6356515 +no_defs ",
  ],
  "EPSG:4672": [
    "Chatham Islands 1971",
    "+proj=longlat +ellps=intl +towgs84=175,-38,113,0,0,0,0 +no_defs ",
  ],
  "EPSG:4673": [
    "Chatham Islands 1979",
    "+proj=longlat +ellps=intl +towgs84=174.05,-25.49,112.57,-0,-0,0.554,0.2263 +no_defs ",
  ],
  "EPSG:4674": [
    "SIRGAS 2000",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4675": [
    "Guam 1963",
    "+proj=longlat +ellps=clrk66 +towgs84=-100,-248,259,0,0,0,0 +no_defs ",
  ],
  "EPSG:4676": ["Vientiane 1982", "+proj=longlat +ellps=krass +no_defs "],
  "EPSG:4677": ["Lao 1993", "+proj=longlat +ellps=krass +no_defs "],
  "EPSG:4678": [
    "Lao 1997",
    "+proj=longlat +ellps=krass +towgs84=44.585,-131.212,-39.544,0,0,0,0 +no_defs ",
  ],
  "EPSG:4679": [
    "Jouik 1961",
    "+proj=longlat +ellps=clrk80 +towgs84=-80.01,253.26,291.19,0,0,0,0 +no_defs ",
  ],
  "EPSG:4680": [
    "Nouakchott 1965",
    "+proj=longlat +ellps=clrk80 +towgs84=124.5,-63.5,-281,0,0,0,0 +no_defs ",
  ],
  "EPSG:4681": ["Mauritania 1999", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4682": [
    "Gulshan 303",
    "+proj=longlat +a=6377276.345 +b=6356075.41314024 +towgs84=283.7,735.9,261.1,0,0,0,0 +no_defs ",
  ],
  "EPSG:4683": [
    "PRS92",
    "+proj=longlat +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +no_defs ",
  ],
  "EPSG:4684": [
    "Gan 1970",
    "+proj=longlat +ellps=intl +towgs84=-133,-321,50,0,0,0,0 +no_defs ",
  ],
  "EPSG:4685": ["Gandajika", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4686": [
    "MAGNA-SIRGAS",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4687": [
    "RGPF",
    "+proj=longlat +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +no_defs ",
  ],
  "EPSG:4688": [
    "Fatu Iva 72",
    "+proj=longlat +ellps=intl +towgs84=347.103,1078.12,2623.92,-33.8875,70.6773,-9.3943,186.074 +no_defs ",
  ],
  "EPSG:4689": [
    "IGN63 Hiva Oa",
    "+proj=longlat +ellps=intl +towgs84=410.721,55.049,80.746,2.5779,2.3514,0.6664,17.3311 +no_defs ",
  ],
  "EPSG:4690": ["Tahiti 79", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4691": [
    "Moorea 87",
    "+proj=longlat +ellps=intl +towgs84=215.525,149.593,176.229,-3.2624,-1.692,-1.1571,10.4773 +no_defs ",
  ],
  "EPSG:4692": [
    "Maupiti 83",
    "+proj=longlat +ellps=intl +towgs84=217.037,86.959,23.956,0,0,0,0 +no_defs ",
  ],
  "EPSG:4693": [
    "Nakhl-e Ghanem",
    "+proj=longlat +ellps=WGS84 +towgs84=0,-0.15,0.68,0,0,0,0 +no_defs ",
  ],
  "EPSG:4694": [
    "POSGAR 94",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4695": [
    "Katanga 1955",
    "+proj=longlat +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +no_defs ",
  ],
  "EPSG:4696": ["Kasai 1953", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4697": [
    "IGC 1962 6th Parallel South",
    "+proj=longlat +ellps=clrk80 +no_defs ",
  ],
  "EPSG:4698": [
    "IGN 1962 Kerguelen",
    "+proj=longlat +ellps=intl +towgs84=145,-187,103,0,0,0,0 +no_defs ",
  ],
  "EPSG:4699": [
    "Le Pouce 1934",
    "+proj=longlat +ellps=clrk80 +towgs84=-770.1,158.4,-498.2,0,0,0,0 +no_defs ",
  ],
  "EPSG:4700": ["IGN Astro 1960", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4701": [
    "IGCB 1955",
    "+proj=longlat +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +no_defs ",
  ],
  "EPSG:4702": [
    "Mauritania 1999",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4703": ["Mhast 1951", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4704": ["Mhast (onshore)", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4705": ["Mhast (offshore)", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4706": [
    "Egypt Gulf of Suez S-650 TL",
    "+proj=longlat +ellps=helmert +towgs84=-146.21,112.63,4.05,0,0,0,0 +no_defs ",
  ],
  "EPSG:4707": [
    "Tern Island 1961",
    "+proj=longlat +ellps=intl +towgs84=114,-116,-333,0,0,0,0 +no_defs ",
  ],
  "EPSG:4708": [
    "Cocos Islands 1965",
    "+proj=longlat +ellps=aust_SA +towgs84=-491,-22,435,0,0,0,0 +no_defs ",
  ],
  "EPSG:4709": [
    "Iwo Jima 1945",
    "+proj=longlat +ellps=intl +towgs84=145,75,-272,0,0,0,0 +no_defs ",
  ],
  "EPSG:4710": [
    "St. Helena 1971",
    "+proj=longlat +ellps=intl +towgs84=-320,550,-494,0,0,0,0 +no_defs ",
  ],
  "EPSG:4711": [
    "Marcus Island 1952",
    "+proj=longlat +ellps=intl +towgs84=124,-234,-25,0,0,0,0 +no_defs ",
  ],
  "EPSG:4712": [
    "Ascension Island 1958",
    "+proj=longlat +ellps=intl +towgs84=-205,107,53,0,0,0,0 +no_defs ",
  ],
  "EPSG:4713": [
    "Ayabelle Lighthouse",
    "+proj=longlat +ellps=clrk80 +towgs84=-79,-129,145,0,0,0,0 +no_defs ",
  ],
  "EPSG:4714": [
    "Bellevue",
    "+proj=longlat +ellps=intl +towgs84=-127,-769,472,0,0,0,0 +no_defs ",
  ],
  "EPSG:4715": [
    "Camp Area Astro",
    "+proj=longlat +ellps=intl +towgs84=-104,-129,239,0,0,0,0 +no_defs ",
  ],
  "EPSG:4716": [
    "Phoenix Islands 1966",
    "+proj=longlat +ellps=intl +towgs84=298,-304,-375,0,0,0,0 +no_defs ",
  ],
  "EPSG:4717": [
    "Cape Canaveral",
    "+proj=longlat +ellps=clrk66 +towgs84=-2,151,181,0,0,0,0 +no_defs ",
  ],
  "EPSG:4718": [
    "Solomon 1968",
    "+proj=longlat +ellps=intl +towgs84=252,-209,-751,0,0,0,0 +no_defs ",
  ],
  "EPSG:4719": [
    "Easter Island 1967",
    "+proj=longlat +ellps=intl +towgs84=211,147,111,0,0,0,0 +no_defs ",
  ],
  "EPSG:4720": [
    "Fiji 1986",
    "+proj=longlat +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +no_defs ",
  ],
  "EPSG:4721": [
    "Fiji 1956",
    "+proj=longlat +ellps=intl +towgs84=265.025,384.929,-194.046,0,0,0,0 +no_defs ",
  ],
  "EPSG:4722": [
    "South Georgia 1968",
    "+proj=longlat +ellps=intl +towgs84=-794,119,-298,0,0,0,0 +no_defs ",
  ],
  "EPSG:4723": [
    "Grand Cayman 1959",
    "+proj=longlat +ellps=clrk66 +towgs84=67.8,106.1,138.8,0,0,0,0 +no_defs ",
  ],
  "EPSG:4724": [
    "Diego Garcia 1969",
    "+proj=longlat +ellps=intl +towgs84=208,-435,-229,0,0,0,0 +no_defs ",
  ],
  "EPSG:4725": [
    "Johnston Island 1961",
    "+proj=longlat +ellps=intl +towgs84=189,-79,-202,0,0,0,0 +no_defs ",
  ],
  "EPSG:4726": [
    "Little Cayman 1961",
    "+proj=longlat +ellps=clrk66 +towgs84=42,124,147,0,0,0,0 +no_defs ",
  ],
  "EPSG:4727": [
    "Midway 1961",
    "+proj=longlat +ellps=intl +towgs84=403,-81,277,0,0,0,0 +no_defs ",
  ],
  "EPSG:4728": [
    "Pico de las Nieves 1984",
    "+proj=longlat +ellps=intl +towgs84=-307,-92,127,0,0,0,0 +no_defs ",
  ],
  "EPSG:4729": [
    "Pitcairn 1967",
    "+proj=longlat +ellps=intl +towgs84=185,165,42,0,0,0,0 +no_defs ",
  ],
  "EPSG:4730": [
    "Santo 1965",
    "+proj=longlat +ellps=intl +towgs84=170,42,84,0,0,0,0 +no_defs ",
  ],
  "EPSG:4731": [
    "Viti Levu 1916",
    "+proj=longlat +ellps=clrk80 +towgs84=51,391,-36,0,0,0,0 +no_defs ",
  ],
  "EPSG:4732": [
    "Marshall Islands 1960",
    "+proj=longlat +a=6378270 +b=6356794.343434343 +towgs84=102,52,-38,0,0,0,0 +no_defs ",
  ],
  "EPSG:4733": [
    "Wake Island 1952",
    "+proj=longlat +ellps=intl +towgs84=276,-57,149,0,0,0,0 +no_defs ",
  ],
  "EPSG:4734": [
    "Tristan 1968",
    "+proj=longlat +ellps=intl +towgs84=-632,438,-609,0,0,0,0 +no_defs ",
  ],
  "EPSG:4735": [
    "Kusaie 1951",
    "+proj=longlat +ellps=intl +towgs84=647,1777,-1124,0,0,0,0 +no_defs ",
  ],
  "EPSG:4736": [
    "Deception Island",
    "+proj=longlat +ellps=clrk80 +towgs84=260,12,-147,0,0,0,0 +no_defs ",
  ],
  "EPSG:4737": [
    "Korea 2000",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4738": [
    "Hong Kong 1963",
    "+proj=longlat +a=6378293.645208759 +b=6356617.987679838 +no_defs ",
  ],
  "EPSG:4739": [
    "Hong Kong 1963(67)",
    "+proj=longlat +ellps=intl +towgs84=-156,-271,-189,0,0,0,0 +no_defs ",
  ],
  "EPSG:4740": [
    "PZ-90",
    "+proj=longlat +a=6378136 +b=6356751.361745712 +towgs84=0,0,1.5,-0,-0,0.076,0 +no_defs ",
  ],
  "EPSG:4741": ["FD54", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4742": ["GDM2000", "+proj=longlat +ellps=GRS80 +no_defs "],
  "EPSG:4743": [
    "Karbala 1979",
    "+proj=longlat +ellps=clrk80 +towgs84=84.1,-320.1,218.7,0,0,0,0 +no_defs ",
  ],
  "EPSG:4744": ["Nahrwan 1934", "+proj=longlat +ellps=clrk80 +no_defs "],
  "EPSG:4745": ["RD/83", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4746": ["PD/83", "+proj=longlat +ellps=bessel +no_defs "],
  "EPSG:4747": [
    "GR96",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4748": [
    "Vanua Levu 1915",
    "+proj=longlat +a=6378306.3696 +b=6356571.996 +towgs84=51,391,-36,0,0,0,0 +no_defs ",
  ],
  "EPSG:4749": [
    "RGNC91-93",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4750": [
    "ST87 Ouvea",
    "+proj=longlat +ellps=WGS84 +towgs84=-56.263,16.136,-22.856,0,0,0,0 +no_defs ",
  ],
  "EPSG:4751": [
    "Kertau (RSO)",
    "+proj=longlat +a=6377295.664 +b=6356094.667915204 +no_defs ",
  ],
  "EPSG:4752": [
    "Viti Levu 1912",
    "+proj=longlat +a=6378306.3696 +b=6356571.996 +towgs84=51,391,-36,0,0,0,0 +no_defs ",
  ],
  "EPSG:4753": ["fk89", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4754": [
    "LGD2006",
    "+proj=longlat +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +no_defs ",
  ],
  "EPSG:4755": [
    "DGN95",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4756": ["VN-2000", "+proj=longlat +ellps=WGS84 +no_defs "],
  "EPSG:4757": ["SVY21", "+proj=longlat +ellps=WGS84 +no_defs "],
  "EPSG:4758": [
    "JAD2001",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4759": [
    "NAD83(NSRS2007)",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4760": ["WGS 66", "+proj=longlat +ellps=WGS66 +no_defs "],
  "EPSG:4761": [
    "HTRS96",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4762": [
    "BDA2000",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4763": [
    "Pitcairn 2006",
    "+proj=longlat +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4764": [
    "RSRGD2000",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4765": [
    "Slovenia 1996",
    "+proj=longlat +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +no_defs ",
  ],
  "EPSG:4801": [
    "Bern 1898 (Bern)",
    "+proj=longlat +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +pm=bern +no_defs ",
  ],
  "EPSG:4802": [
    "Bogota 1975 (Bogota)",
    "+proj=longlat +ellps=intl +towgs84=307,304,-318,0,0,0,0 +pm=bogota +no_defs ",
  ],
  "EPSG:4803": [
    "Lisbon (Lisbon)",
    "+proj=longlat +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +pm=lisbon +no_defs ",
  ],
  "EPSG:4804": [
    "Makassar (Jakarta)",
    "+proj=longlat +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +pm=jakarta +no_defs ",
  ],
  "EPSG:4805": [
    "MGI (Ferro)",
    "+proj=longlat +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +no_defs ",
  ],
  "EPSG:4806": [
    "Monte Mario (Rome)",
    "+proj=longlat +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +pm=rome +no_defs ",
  ],
  "EPSG:4807": [
    "NTF (Paris)",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +no_defs ",
  ],
  "EPSG:4808": [
    "Padang (Jakarta)",
    "+proj=longlat +ellps=bessel +pm=jakarta +no_defs ",
  ],
  "EPSG:4809": [
    "Belge 1950 (Brussels)",
    "+proj=longlat +ellps=intl +pm=brussels +no_defs ",
  ],
  "EPSG:4810": [
    "Tananarive (Paris)",
    "+proj=longlat +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +pm=paris +no_defs ",
  ],
  "EPSG:4811": [
    "Voirol 1875 (Paris)",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +pm=paris +no_defs ",
  ],
  "EPSG:4813": [
    "Batavia (Jakarta)",
    "+proj=longlat +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +pm=jakarta +no_defs ",
  ],
  "EPSG:4814": [
    "RT38 (Stockholm)",
    "+proj=longlat +ellps=bessel +pm=stockholm +no_defs ",
  ],
  "EPSG:4815": [
    "Greek (Athens)",
    "+proj=longlat +ellps=bessel +pm=athens +no_defs ",
  ],
  "EPSG:4816": [
    "Carthage (Paris)",
    "+proj=longlat +a=6378249.2 +b=6356515 +towgs84=-263,6,431,0,0,0,0 +pm=paris +no_defs ",
  ],
  "EPSG:4817": [
    "NGO 1948 (Oslo)",
    "+proj=longlat +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +no_defs ",
  ],
  "EPSG:4818": [
    "S-JTSK (Ferro)",
    "+proj=longlat +ellps=bessel +towgs84=589,76,480,0,0,0,0 +pm=ferro +no_defs ",
  ],
  "EPSG:4819": [
    "Nord Sahara 1959 (Paris)",
    "+proj=longlat +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +pm=paris +no_defs ",
  ],
  "EPSG:4820": [
    "Segara (Jakarta)",
    "+proj=longlat +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +pm=jakarta +no_defs ",
  ],
  "EPSG:4821": [
    "Voirol 1879 (Paris)",
    "+proj=longlat +a=6378249.2 +b=6356515 +pm=paris +no_defs ",
  ],
  "EPSG:4823": ["Sao Tome", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4824": ["Principe", "+proj=longlat +ellps=intl +no_defs "],
  "EPSG:4901": [
    "ATF (Paris)",
    "+proj=longlat +a=6376523 +b=6355862.933255573 +pm=2.337208333333333 +no_defs ",
  ],
  "EPSG:4902": [
    "NDG (Paris)",
    "+proj=longlat +a=6376523 +b=6355862.933255573 +pm=paris +no_defs ",
  ],
  "EPSG:4903": [
    "Madrid 1870 (Madrid)",
    "+proj=longlat +a=6378298.3 +b=6356657.142669561 +pm=madrid +no_defs ",
  ],
  "EPSG:4904": [
    "Lisbon 1890 (Lisbon)",
    "+proj=longlat +ellps=bessel +towgs84=508.088,-191.042,565.223,0,0,0,0 +pm=lisbon +no_defs ",
  ],
  "EPSG:2000": [
    "Anguilla 1957 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:2001": [
    "Antigua 1943 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=-255,-15,71,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2002": [
    "Dominica 1945 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=725,685,536,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2003": [
    "Grenada 1953 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=72,213.7,93,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2004": [
    "Montserrat 1958 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=174,359,365,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2005": [
    "St. Kitts 1955 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=9,183,236,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2006": [
    "St. Lucia 1955 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=-149,128,296,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2007": [
    "St. Vincent 45 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=195.671,332.517,274.607,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2008": [
    "NAD27(CGQ77) / SCoPQ zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2009": [
    "NAD27(CGQ77) / SCoPQ zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2010": [
    "NAD27(CGQ77) / SCoPQ zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2011": [
    "NAD27(CGQ77) / SCoPQ zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2012": [
    "NAD27(CGQ77) / SCoPQ zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2013": [
    "NAD27(CGQ77) / SCoPQ zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2014": [
    "NAD27(CGQ77) / SCoPQ zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2015": [
    "NAD27(CGQ77) / SCoPQ zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2016": [
    "NAD27(CGQ77) / SCoPQ zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2017": [
    "NAD27(76) / MTM zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2018": [
    "NAD27(76) / MTM zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2019": [
    "NAD27(76) / MTM zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2020": [
    "NAD27(76) / MTM zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=-82.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2021": [
    "NAD27(76) / MTM zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2022": [
    "NAD27(76) / MTM zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=-84 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2023": [
    "NAD27(76) / MTM zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2024": [
    "NAD27(76) / MTM zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2025": [
    "NAD27(76) / MTM zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2026": [
    "NAD27(76) / MTM zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=-96 +k=0.9999 +x_0=304800 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2027": [
    "NAD27(76) / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2028": [
    "NAD27(76) / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2029": [
    "NAD27(76) / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2030": [
    "NAD27(76) / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2031": [
    "NAD27(CGQ77) / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2032": [
    "NAD27(CGQ77) / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2033": [
    "NAD27(CGQ77) / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2034": [
    "NAD27(CGQ77) / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2035": [
    "NAD27(CGQ77) / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2036": [
    "NAD83(CSRS98) / New Brunswick Stereo (deprecated)",
    "+proj=sterea +lat_0=46.5 +lon_0=-66.5 +k=0.999912 +x_0=2500000 +y_0=7500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2037": [
    "NAD83(CSRS98) / UTM zone 19N (deprecated)",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2038": [
    "NAD83(CSRS98) / UTM zone 20N (deprecated)",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2039": [
    "Israel / Israeli TM Grid",
    "+proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2040": [
    "Locodjo 1965 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2041": [
    "Abidjan 1987 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2042": [
    "Locodjo 1965 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2043": [
    "Abidjan 1987 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2044": [
    "Hanoi 1972 / Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2045": [
    "Hanoi 1972 / Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2046": [
    "Hartebeesthoek94 / Lo15",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2047": [
    "Hartebeesthoek94 / Lo17",
    "+proj=tmerc +lat_0=0 +lon_0=17 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2048": [
    "Hartebeesthoek94 / Lo19",
    "+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2049": [
    "Hartebeesthoek94 / Lo21",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2050": [
    "Hartebeesthoek94 / Lo23",
    "+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2051": [
    "Hartebeesthoek94 / Lo25",
    "+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2052": [
    "Hartebeesthoek94 / Lo27",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2053": [
    "Hartebeesthoek94 / Lo29",
    "+proj=tmerc +lat_0=0 +lon_0=29 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2054": [
    "Hartebeesthoek94 / Lo31",
    "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2055": [
    "Hartebeesthoek94 / Lo33",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2056": [
    "CH1903+ / LV95",
    "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=2600000 +y_0=1200000 +ellps=bessel +towgs84=674.374,15.056,405.346,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2075": [
    "ELD79 / Libya zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=23 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2057": [
    "Rassadiran / Nakhl e Taqi",
    "+proj=omerc +lat_0=27.51882880555555 +lonc=52.60353916666667 +alpha=0.5716611944444444 +k=0.999895934 +x_0=658377.437 +y_0=3044969.194 +gamma=0.5716611944444444 +ellps=intl +towgs84=-133.63,-157.5,-158.62,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2058": [
    "ED50(ED77) / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2059": [
    "ED50(ED77) / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2060": [
    "ED50(ED77) / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2061": [
    "ED50(ED77) / UTM zone 41N",
    "+proj=utm +zone=41 +ellps=intl +towgs84=-117,-132,-164,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2062": [
    "Madrid 1870 (Madrid) / Spain",
    "+proj=lcc +lat_1=40 +lat_0=40 +lon_0=0 +k_0=0.9988085293 +x_0=600000 +y_0=600000 +a=6378298.3 +b=6356657.142669561 +pm=madrid +units=m +no_defs ",
  ],
  "EPSG:2063": [
    "Dabola 1981 / UTM zone 28N (deprecated)",
    "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2064": [
    "Dabola 1981 / UTM zone 29N (deprecated)",
    "+proj=utm +zone=29 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2065": [
    "S-JTSK (Ferro) / Krovak",
    "+proj=krovak +lat_0=49.5 +lon_0=42.5 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:2066": [
    "Mount Dillon / Tobago Grid",
    "+proj=cass +lat_0=11.25217861111111 +lon_0=-60.68600888888889 +x_0=37718.66159325 +y_0=36209.91512952 +a=6378293.645208759 +b=6356617.987679838 +to_meter=0.201166195164 +no_defs ",
  ],
  "EPSG:2067": [
    "Naparima 1955 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=intl +towgs84=-0.465,372.095,171.736,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2068": [
    "ELD79 / Libya zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2069": [
    "ELD79 / Libya zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=11 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2070": [
    "ELD79 / Libya zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=13 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2071": [
    "ELD79 / Libya zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2072": [
    "ELD79 / Libya zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=17 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2073": [
    "ELD79 / Libya zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2074": [
    "ELD79 / Libya zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2076": [
    "ELD79 / Libya zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=25 +k=0.9999 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2077": [
    "ELD79 / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2078": [
    "ELD79 / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2079": [
    "ELD79 / UTM zone 34N",
    "+proj=utm +zone=34 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2080": [
    "ELD79 / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2081": [
    "Chos Malal 1914 / Argentina zone 2",
    "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:2082": [
    "Pampa del Castillo / Argentina zone 2",
    "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=27.5,14,186.4,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2083": [
    "Hito XVIII 1963 / Argentina zone 2",
    "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=16,196,93,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2084": [
    "Hito XVIII 1963 / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=intl +towgs84=16,196,93,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2085": [
    "NAD27 / Cuba Norte (deprecated)",
    "+proj=lcc +lat_1=22.35 +lat_0=22.35 +lon_0=-81 +k_0=0.99993602 +x_0=500000 +y_0=280296.016 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:2086": [
    "NAD27 / Cuba Sur (deprecated)",
    "+proj=lcc +lat_1=20.71666666666667 +lat_0=20.71666666666667 +lon_0=-76.83333333333333 +k_0=0.99994848 +x_0=500000 +y_0=229126.939 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:2087": [
    "ELD79 / TM 12 NE",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-115.854,-99.0583,-152.462,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2088": [
    "Carthage / TM 11 NE",
    "+proj=tmerc +lat_0=0 +lon_0=11 +k=0.9996 +x_0=500000 +y_0=0 +a=6378249.2 +b=6356515 +towgs84=-263,6,431,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2089": [
    "Yemen NGN96 / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2090": [
    "Yemen NGN96 / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2091": [
    "South Yemen / Gauss Kruger zone 8 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2092": [
    "South Yemen / Gauss Kruger zone 9 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2093": [
    "Hanoi 1972 / GK 106 NE",
    "+proj=tmerc +lat_0=0 +lon_0=106 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=-17.51,-108.32,-62.39,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2094": [
    "WGS 72BE / TM 106 NE",
    "+proj=tmerc +lat_0=0 +lon_0=106 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:2095": [
    "Bissau / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=intl +towgs84=-173,253,27,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2096": [
    "Korean 1985 / Korea East Belt",
    "+proj=tmerc +lat_0=38 +lon_0=129 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:2097": [
    "Korean 1985 / Korea Central Belt",
    "+proj=tmerc +lat_0=38 +lon_0=127 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:2098": [
    "Korean 1985 / Korea West Belt",
    "+proj=tmerc +lat_0=38 +lon_0=125 +k=1 +x_0=200000 +y_0=500000 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:2099": [
    "Qatar 1948 / Qatar Grid",
    "+proj=cass +lat_0=25.38236111111111 +lon_0=50.76138888888889 +x_0=100000 +y_0=100000 +ellps=helmert +units=m +no_defs ",
  ],
  "EPSG:2100": [
    "GGRS87 / Greek Grid",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2101": [
    "Lake / Maracaibo Grid M1",
    "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=0 +y_0=-52684.972 +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:2102": [
    "Lake / Maracaibo Grid",
    "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=200000 +y_0=147315.028 +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:2103": [
    "Lake / Maracaibo Grid M3",
    "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=500000 +y_0=447315.028 +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:2104": [
    "Lake / Maracaibo La Rosa Grid",
    "+proj=lcc +lat_1=10.16666666666667 +lat_0=10.16666666666667 +lon_0=-71.60561777777777 +k_0=1 +x_0=-17044 +y_0=-23139.97 +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:2105": [
    "NZGD2000 / Mount Eden 2000",
    "+proj=tmerc +lat_0=-36.87972222222222 +lon_0=174.7641666666667 +k=0.9999 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2106": [
    "NZGD2000 / Bay of Plenty 2000",
    "+proj=tmerc +lat_0=-37.76111111111111 +lon_0=176.4661111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2107": [
    "NZGD2000 / Poverty Bay 2000",
    "+proj=tmerc +lat_0=-38.62444444444444 +lon_0=177.8855555555556 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2108": [
    "NZGD2000 / Hawkes Bay 2000",
    "+proj=tmerc +lat_0=-39.65083333333333 +lon_0=176.6736111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2109": [
    "NZGD2000 / Taranaki 2000",
    "+proj=tmerc +lat_0=-39.13555555555556 +lon_0=174.2277777777778 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2110": [
    "NZGD2000 / Tuhirangi 2000",
    "+proj=tmerc +lat_0=-39.51222222222222 +lon_0=175.64 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2111": [
    "NZGD2000 / Wanganui 2000",
    "+proj=tmerc +lat_0=-40.24194444444444 +lon_0=175.4880555555555 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2112": [
    "NZGD2000 / Wairarapa 2000",
    "+proj=tmerc +lat_0=-40.92527777777777 +lon_0=175.6472222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2113": [
    "NZGD2000 / Wellington 2000",
    "+proj=tmerc +lat_0=-41.3011111111111 +lon_0=174.7763888888889 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2114": [
    "NZGD2000 / Collingwood 2000",
    "+proj=tmerc +lat_0=-40.71472222222223 +lon_0=172.6719444444444 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2115": [
    "NZGD2000 / Nelson 2000",
    "+proj=tmerc +lat_0=-41.27444444444444 +lon_0=173.2991666666667 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2116": [
    "NZGD2000 / Karamea 2000",
    "+proj=tmerc +lat_0=-41.28972222222222 +lon_0=172.1088888888889 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2117": [
    "NZGD2000 / Buller 2000",
    "+proj=tmerc +lat_0=-41.81055555555555 +lon_0=171.5811111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2118": [
    "NZGD2000 / Grey 2000",
    "+proj=tmerc +lat_0=-42.33361111111111 +lon_0=171.5497222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2119": [
    "NZGD2000 / Amuri 2000",
    "+proj=tmerc +lat_0=-42.68888888888888 +lon_0=173.01 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2120": [
    "NZGD2000 / Marlborough 2000",
    "+proj=tmerc +lat_0=-41.54444444444444 +lon_0=173.8019444444444 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2121": [
    "NZGD2000 / Hokitika 2000",
    "+proj=tmerc +lat_0=-42.88611111111111 +lon_0=170.9797222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2122": [
    "NZGD2000 / Okarito 2000",
    "+proj=tmerc +lat_0=-43.11 +lon_0=170.2608333333333 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2123": [
    "NZGD2000 / Jacksons Bay 2000",
    "+proj=tmerc +lat_0=-43.97777777777778 +lon_0=168.6061111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2124": [
    "NZGD2000 / Mount Pleasant 2000",
    "+proj=tmerc +lat_0=-43.59055555555556 +lon_0=172.7269444444445 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2125": [
    "NZGD2000 / Gawler 2000",
    "+proj=tmerc +lat_0=-43.74861111111111 +lon_0=171.3605555555555 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2126": [
    "NZGD2000 / Timaru 2000",
    "+proj=tmerc +lat_0=-44.40194444444445 +lon_0=171.0572222222222 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2127": [
    "NZGD2000 / Lindis Peak 2000",
    "+proj=tmerc +lat_0=-44.735 +lon_0=169.4675 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2128": [
    "NZGD2000 / Mount Nicholas 2000",
    "+proj=tmerc +lat_0=-45.13277777777778 +lon_0=168.3986111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2129": [
    "NZGD2000 / Mount York 2000",
    "+proj=tmerc +lat_0=-45.56361111111111 +lon_0=167.7386111111111 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2130": [
    "NZGD2000 / Observation Point 2000",
    "+proj=tmerc +lat_0=-45.81611111111111 +lon_0=170.6283333333333 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2131": [
    "NZGD2000 / North Taieri 2000",
    "+proj=tmerc +lat_0=-45.86138888888889 +lon_0=170.2825 +k=0.99996 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2132": [
    "NZGD2000 / Bluff 2000",
    "+proj=tmerc +lat_0=-46.6 +lon_0=168.3427777777778 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2133": [
    "NZGD2000 / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2134": [
    "NZGD2000 / UTM zone 59S",
    "+proj=utm +zone=59 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2135": [
    "NZGD2000 / UTM zone 60S",
    "+proj=utm +zone=60 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2136": [
    "Accra / Ghana National Grid",
    "+proj=tmerc +lat_0=4.666666666666667 +lon_0=-1 +k=0.99975 +x_0=274319.7391633579 +y_0=0 +a=6378300 +b=6356751.689189189 +towgs84=-199,32,322,0,0,0,0 +to_meter=0.3047997101815088 +no_defs ",
  ],
  "EPSG:2137": [
    "Accra / TM 1 NW",
    "+proj=tmerc +lat_0=0 +lon_0=-1 +k=0.9996 +x_0=500000 +y_0=0 +a=6378300 +b=6356751.689189189 +towgs84=-199,32,322,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2138": [
    "NAD27(CGQ77) / Quebec Lambert",
    "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=clrk66 +units=m +no_defs ",
  ],
  "EPSG:2139": [
    "NAD83(CSRS98) / SCoPQ zone 2 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2140": [
    "NAD83(CSRS98) / MTM zone 3 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2141": [
    "NAD83(CSRS98) / MTM zone 4 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2311": [
    "WGS 84 / TM 6 NE",
    "+proj=tmerc +lat_0=0 +lon_0=6 +k=0.9996 +x_0=500000 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:2142": [
    "NAD83(CSRS98) / MTM zone 5 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2143": [
    "NAD83(CSRS98) / MTM zone 6 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2144": [
    "NAD83(CSRS98) / MTM zone 7 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2145": [
    "NAD83(CSRS98) / MTM zone 8 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2146": [
    "NAD83(CSRS98) / MTM zone 9 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2147": [
    "NAD83(CSRS98) / MTM zone 10 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2148": [
    "NAD83(CSRS98) / UTM zone 21N (deprecated)",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2149": [
    "NAD83(CSRS98) / UTM zone 18N (deprecated)",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2150": [
    "NAD83(CSRS98) / UTM zone 17N (deprecated)",
    "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2312": [
    "Garoua / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:2151": [
    "NAD83(CSRS98) / UTM zone 13N (deprecated)",
    "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2152": [
    "NAD83(CSRS98) / UTM zone 12N (deprecated)",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2153": [
    "NAD83(CSRS98) / UTM zone 11N (deprecated)",
    "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2154": [
    "RGF93 / Lambert-93",
    "+proj=lcc +lat_1=49 +lat_2=44 +lat_0=46.5 +lon_0=3 +x_0=700000 +y_0=6600000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2155": [
    "American Samoa 1962 / American Samoa Lambert (deprecated)",
    "+proj=lcc +lat_1=-14.26666666666667 +lat_0=-14.26666666666667 +lon_0=170 +k_0=1 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2156": [
    "NAD83(HARN) / UTM zone 59S (deprecated)",
    "+proj=utm +zone=59 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2157": [
    "IRENET95 / Irish Transverse Mercator",
    "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=0.99982 +x_0=600000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2158": [
    "IRENET95 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2159": [
    "Sierra Leone 1924 / New Colony Grid",
    "+proj=tmerc +lat_0=6.666666666666667 +lon_0=-12 +k=1 +x_0=152399.8550907544 +y_0=0 +a=6378300 +b=6356751.689189189 +to_meter=0.3047997101815088 +no_defs ",
  ],
  "EPSG:2160": [
    "Sierra Leone 1924 / New War Office Grid",
    "+proj=tmerc +lat_0=6.666666666666667 +lon_0=-12 +k=1 +x_0=243839.7681452071 +y_0=182879.8261089053 +a=6378300 +b=6356751.689189189 +to_meter=0.3047997101815088 +no_defs ",
  ],
  "EPSG:2161": [
    "Sierra Leone 1968 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=clrk80 +towgs84=-88,4,101,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2162": [
    "Sierra Leone 1968 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-88,4,101,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2163": [
    "unnamed",
    "+proj=laea +lat_0=45 +lon_0=-100 +x_0=0 +y_0=0 +a=6370997 +b=6370997 +units=m +no_defs ",
  ],
  "EPSG:2164": [
    "Locodjo 1965 / TM 5 NW",
    "+proj=tmerc +lat_0=0 +lon_0=-5 +k=0.9996 +x_0=500000 +y_0=0 +ellps=clrk80 +towgs84=-125,53,467,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2165": [
    "Abidjan 1987 / TM 5 NW",
    "+proj=tmerc +lat_0=0 +lon_0=-5 +k=0.9996 +x_0=500000 +y_0=0 +ellps=clrk80 +towgs84=-124.76,53,466.79,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2166": [
    "Pulkovo 1942(83) / Gauss Kruger zone 3 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2167": [
    "Pulkovo 1942(83) / Gauss Kruger zone 4 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2168": [
    "Pulkovo 1942(83) / Gauss Kruger zone 5 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2169": [
    "Luxembourg 1930 / Gauss",
    "+proj=tmerc +lat_0=49.83333333333334 +lon_0=6.166666666666667 +k=1 +x_0=80000 +y_0=100000 +ellps=intl +towgs84=-193,13.7,-39.3,-0.41,-2.933,2.688,0.43 +units=m +no_defs ",
  ],
  "EPSG:2170": [
    "MGI / Slovenia Grid (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:2171": [
    "Pulkovo 1942(58) / Poland zone I (deprecated)",
    "+proj=sterea +lat_0=50.625 +lon_0=21.08333333333333 +k=0.9998 +x_0=4637000 +y_0=5647000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:2172": [
    "Pulkovo 1942(58) / Poland zone II",
    "+proj=sterea +lat_0=53.00194444444445 +lon_0=21.50277777777778 +k=0.9998 +x_0=4603000 +y_0=5806000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:2173": [
    "Pulkovo 1942(58) / Poland zone III",
    "+proj=sterea +lat_0=53.58333333333334 +lon_0=17.00833333333333 +k=0.9998 +x_0=3501000 +y_0=5999000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:2174": [
    "Pulkovo 1942(58) / Poland zone IV",
    "+proj=sterea +lat_0=51.67083333333333 +lon_0=16.67222222222222 +k=0.9998 +x_0=3703000 +y_0=5627000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:2175": [
    "Pulkovo 1942(58) / Poland zone V",
    "+proj=tmerc +lat_0=0 +lon_0=18.95833333333333 +k=0.999983 +x_0=237000 +y_0=-4700000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:2176": [
    "ETRS89 / Poland CS2000 zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.999923 +x_0=5500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2177": [
    "ETRS89 / Poland CS2000 zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.999923 +x_0=6500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2178": [
    "ETRS89 / Poland CS2000 zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.999923 +x_0=7500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2179": [
    "ETRS89 / Poland CS2000 zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.999923 +x_0=8500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2180": [
    "ETRS89 / Poland CS92",
    "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.9993 +x_0=500000 +y_0=-5300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2188": [
    "Azores Occidental 1939 / UTM zone 25N",
    "+proj=utm +zone=25 +ellps=intl +towgs84=-425,-169,81,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2189": [
    "Azores Central 1948 / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=intl +towgs84=-104,167,-38,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2190": [
    "Azores Oriental 1940 / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=intl +towgs84=-203,141,53,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2191": [
    "Madeira 1936 / UTM zone 28N (deprecated)",
    "+proj=utm +zone=28 +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:2192": [
    "ED50 / France EuroLambert",
    "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=2.337229166666667 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2193": [
    "NZGD2000 / New Zealand Transverse Mercator 2000",
    "+proj=tmerc +lat_0=0 +lon_0=173 +k=0.9996 +x_0=1600000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2194": [
    "American Samoa 1962 / American Samoa Lambert (deprecated)",
    "+proj=lcc +lat_1=-14.26666666666667 +lat_0=-14.26666666666667 +lon_0=-170 +k_0=1 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2195": [
    "NAD83(HARN) / UTM zone 2S",
    "+proj=utm +zone=2 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2196": [
    "ETRS89 / Kp2000 Jutland",
    "+proj=tmerc +lat_0=0 +lon_0=9.5 +k=0.99995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2197": [
    "ETRS89 / Kp2000 Zealand",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.99995 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2198": [
    "ETRS89 / Kp2000 Bornholm",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2199": [
    "Albanian 1987 / Gauss Kruger zone 4 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:2200": [
    "ATS77 / New Brunswick Stereographic (ATS77)",
    "+proj=sterea +lat_0=46.5 +lon_0=-66.5 +k=0.999912 +x_0=300000 +y_0=800000 +a=6378135 +b=6356750.304921594 +units=m +no_defs ",
  ],
  "EPSG:2201": [
    "REGVEN / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2202": [
    "REGVEN / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2203": [
    "REGVEN / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2204": [
    "NAD27 / Tennessee",
    "+proj=lcc +lat_1=35.25 +lat_2=36.41666666666666 +lat_0=34.66666666666666 +lon_0=-86 +x_0=609601.2192024384 +y_0=30480.06096012192 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:2205": [
    "NAD83 / Kentucky North",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2206": [
    "ED50 / 3-degree Gauss-Kruger zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2207": [
    "ED50 / 3-degree Gauss-Kruger zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2208": [
    "ED50 / 3-degree Gauss-Kruger zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2209": [
    "ED50 / 3-degree Gauss-Kruger zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2210": [
    "ED50 / 3-degree Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2211": [
    "ED50 / 3-degree Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=14500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2212": [
    "ED50 / 3-degree Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=15500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2213": [
    "ETRS89 / TM 30 NE",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2313": [
    "Kousseri / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:2214": [
    "Douala 1948 / AOF west (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=10.5 +k=0.999 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2215": [
    "Manoca 1962 / UTM zone 32N",
    "+proj=utm +zone=32 +a=6378249.2 +b=6356515 +towgs84=-70.9,-151.8,-41.4,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2216": [
    "Qornoq 1927 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=intl +towgs84=163.511,127.533,-159.789,0,0,0.814,-0.6 +units=m +no_defs ",
  ],
  "EPSG:2217": [
    "Qornoq 1927 / UTM zone 23N",
    "+proj=utm +zone=23 +ellps=intl +towgs84=163.511,127.533,-159.789,0,0,0.814,-0.6 +units=m +no_defs ",
  ],
  "EPSG:2219": [
    "ATS77 / UTM zone 19N",
    "+proj=utm +zone=19 +a=6378135 +b=6356750.304921594 +units=m +no_defs ",
  ],
  "EPSG:2220": [
    "ATS77 / UTM zone 20N",
    "+proj=utm +zone=20 +a=6378135 +b=6356750.304921594 +units=m +no_defs ",
  ],
  "EPSG:2222": [
    "NAD83 / Arizona East (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2223": [
    "NAD83 / Arizona Central (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2224": [
    "NAD83 / Arizona West (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2323": [
    "ED50 / TM39",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2225": [
    "NAD83 / California zone 1 (ftUS)",
    "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2226": [
    "NAD83 / California zone 2 (ftUS)",
    "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2227": [
    "NAD83 / California zone 3 (ftUS)",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2228": [
    "NAD83 / California zone 4 (ftUS)",
    "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2229": [
    "NAD83 / California zone 5 (ftUS)",
    "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2230": [
    "NAD83 / California zone 6 (ftUS)",
    "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2231": [
    "NAD83 / Colorado North (ftUS)",
    "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2232": [
    "NAD83 / Colorado Central (ftUS)",
    "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2233": [
    "NAD83 / Colorado South (ftUS)",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2234": [
    "NAD83 / Connecticut (ftUS)",
    "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096012192 +y_0=152400.3048006096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2235": [
    "NAD83 / Delaware (ftUS)",
    "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2236": [
    "NAD83 / Florida East (ftUS)",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2237": [
    "NAD83 / Florida West (ftUS)",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2238": [
    "NAD83 / Florida North (ftUS)",
    "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2239": [
    "NAD83 / Georgia East (ftUS)",
    "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2240": [
    "NAD83 / Georgia West (ftUS)",
    "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2324": [
    "ED50 / TM42",
    "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2241": [
    "NAD83 / Idaho East (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2242": [
    "NAD83 / Idaho Central (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2243": [
    "NAD83 / Idaho West (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2244": [
    "NAD83 / Indiana East (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249364.9987299975 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2245": [
    "NAD83 / Indiana West (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249364.9987299975 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2246": [
    "NAD83 / Kentucky North (ftUS)",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2247": [
    "NAD83 / Kentucky South (ftUS)",
    "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000.0001016001 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2248": [
    "NAD83 / Maryland (ftUS)",
    "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2249": [
    "NAD83 / Massachusetts Mainland (ftUS)",
    "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2250": [
    "NAD83 / Massachusetts Island (ftUS)",
    "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2251": [
    "NAD83 / Michigan North (ft)",
    "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=7999999.999968001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2252": [
    "NAD83 / Michigan Central (ft)",
    "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=5999999.999976001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2253": [
    "NAD83 / Michigan South (ft)",
    "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=3999999.999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2254": [
    "NAD83 / Mississippi East (ftUS)",
    "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2255": [
    "NAD83 / Mississippi West (ftUS)",
    "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2256": [
    "NAD83 / Montana (ft)",
    "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2257": [
    "NAD83 / New Mexico East (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2258": [
    "NAD83 / New Mexico Central (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2259": [
    "NAD83 / New Mexico West (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2260": [
    "NAD83 / New York East (ftUS)",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2261": [
    "NAD83 / New York Central (ftUS)",
    "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2262": [
    "NAD83 / New York West (ftUS)",
    "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2263": [
    "NAD83 / New York Long Island (ftUS)",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2264": [
    "NAD83 / North Carolina (ftUS)",
    "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2325": [
    "ED50 / TM45",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2265": [
    "NAD83 / North Dakota North (ft)",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2266": [
    "NAD83 / North Dakota South (ft)",
    "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2267": [
    "NAD83 / Oklahoma North (ftUS)",
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2268": [
    "NAD83 / Oklahoma South (ftUS)",
    "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2269": [
    "NAD83 / Oregon North (ft)",
    "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2270": [
    "NAD83 / Oregon South (ft)",
    "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2271": [
    "NAD83 / Pennsylvania North (ftUS)",
    "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2272": [
    "NAD83 / Pennsylvania South (ftUS)",
    "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2273": [
    "NAD83 / South Carolina (ft)",
    "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2274": [
    "NAD83 / Tennessee (ftUS)",
    "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2275": [
    "NAD83 / Texas North (ftUS)",
    "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000.0001016002 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2276": [
    "NAD83 / Texas North Central (ftUS)",
    "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2277": [
    "NAD83 / Texas Central (ftUS)",
    "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=699999.9998983998 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2278": [
    "NAD83 / Texas South Central (ftUS)",
    "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=3999999.9998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2279": [
    "NAD83 / Texas South (ftUS)",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000.0000000001 +y_0=5000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2280": [
    "NAD83 / Utah North (ft)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=999999.9999960001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2281": [
    "NAD83 / Utah Central (ft)",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=1999999.999992 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2282": [
    "NAD83 / Utah South (ft)",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.0001504 +y_0=2999999.999988 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2283": [
    "NAD83 / Virginia North (ftUS)",
    "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2284": [
    "NAD83 / Virginia South (ftUS)",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2285": [
    "NAD83 / Washington North (ftUS)",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2286": [
    "NAD83 / Washington South (ftUS)",
    "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2287": [
    "NAD83 / Wisconsin North (ftUS)",
    "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2288": [
    "NAD83 / Wisconsin Central (ftUS)",
    "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2289": [
    "NAD83 / Wisconsin South (ftUS)",
    "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2290": [
    "ATS77 / Prince Edward Isl. Stereographic (ATS77)",
    "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=700000 +y_0=400000 +a=6378135 +b=6356750.304921594 +units=m +no_defs ",
  ],
  "EPSG:2291": [
    "NAD83(CSRS98) / Prince Edward Isl. Stereographic (NAD83) (deprecated)",
    "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=400000 +y_0=800000 +a=6378135 +b=6356750.304921594 +units=m +no_defs ",
  ],
  "EPSG:2292": [
    "NAD83(CSRS98) / Prince Edward Isl. Stereographic (NAD83) (deprecated)",
    "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2294": [
    "ATS77 / MTM Nova Scotia zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=4500000 +y_0=0 +a=6378135 +b=6356750.304921594 +units=m +no_defs ",
  ],
  "EPSG:2295": [
    "ATS77 / MTM Nova Scotia zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=5500000 +y_0=0 +a=6378135 +b=6356750.304921594 +units=m +no_defs ",
  ],
  "EPSG:2308": [
    "Batavia / TM 109 SE",
    "+proj=tmerc +lat_0=0 +lon_0=109 +k=0.9996 +x_0=500000 +y_0=10000000 +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2309": [
    "WGS 84 / TM 116 SE",
    "+proj=tmerc +lat_0=0 +lon_0=116 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:2310": [
    "WGS 84 / TM 132 SE",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:2314": [
    "Trinidad 1903 / Trinidad Grid (ftCla)",
    "+proj=cass +lat_0=10.44166666666667 +lon_0=-61.33333333333334 +x_0=86501.46392052001 +y_0=65379.0134283 +a=6378293.645208759 +b=6356617.987679838 +towgs84=-61.702,284.488,472.052,0,0,0,0 +to_meter=0.3047972654 +no_defs ",
  ],
  "EPSG:2315": [
    "Campo Inchauspe / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2316": [
    "Campo Inchauspe / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2317": [
    "PSAD56 / ICN Regional",
    "+proj=lcc +lat_1=9 +lat_2=3 +lat_0=6 +lon_0=-66 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2318": [
    "Ain el Abd / Aramco Lambert",
    "+proj=lcc +lat_1=17 +lat_2=33 +lat_0=25.08951 +lon_0=48 +x_0=0 +y_0=0 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2319": [
    "ED50 / TM27",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2320": [
    "ED50 / TM30",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2321": [
    "ED50 / TM33",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2322": [
    "ED50 / TM36",
    "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32601": [
    "WGS 84 / UTM zone 1N",
    "+proj=utm +zone=1 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:2326": [
    "Hong Kong 1980 Grid System",
    "+proj=tmerc +lat_0=22.31213333333334 +lon_0=114.1785555555556 +k=1 +x_0=836694.05 +y_0=819069.8 +ellps=intl +towgs84=-162.619,-276.959,-161.764,0.067753,-2.24365,-1.15883,-1.09425 +units=m +no_defs ",
  ],
  "EPSG:2327": [
    "Xian 1980 / Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2328": [
    "Xian 1980 / Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2329": [
    "Xian 1980 / Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2330": [
    "Xian 1980 / Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2331": [
    "Xian 1980 / Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2332": [
    "Xian 1980 / Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2333": [
    "Xian 1980 / Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2334": [
    "Xian 1980 / Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2335": [
    "Xian 1980 / Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2336": [
    "Xian 1980 / Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2337": [
    "Xian 1980 / Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2338": [
    "Xian 1980 / Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2339": [
    "Xian 1980 / Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2340": [
    "Xian 1980 / Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2341": [
    "Xian 1980 / Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2342": [
    "Xian 1980 / Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2343": [
    "Xian 1980 / Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2344": [
    "Xian 1980 / Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2345": [
    "Xian 1980 / Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2346": [
    "Xian 1980 / Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2347": [
    "Xian 1980 / Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2348": [
    "Xian 1980 / Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2349": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2350": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2351": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2352": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2353": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2354": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2355": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2356": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2357": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 33",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2358": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 34",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2359": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 35",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2360": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 36",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2361": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 37",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2362": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 38",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2363": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 39",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2364": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 40",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2365": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 41",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2366": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 42",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2367": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 43",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2368": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 44",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2369": [
    "Xian 1980 / 3-degree Gauss-Kruger zone 45",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2370": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2371": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 78E",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2372": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2373": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 84E",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2374": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2375": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 90E",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2376": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2377": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 96E",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2378": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2379": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 102E",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2380": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2381": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 108E",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2382": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2383": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 114E",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2384": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2385": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 120E",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2386": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2387": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 126E",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2388": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2389": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 132E",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2390": [
    "Xian 1980 / 3-degree Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ",
  ],
  "EPSG:2391": [
    "KKJ / Finland zone 1",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs ",
  ],
  "EPSG:2392": [
    "KKJ / Finland zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs ",
  ],
  "EPSG:2393": [
    "KKJ / Finland Uniform Coordinate System",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=3500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs ",
  ],
  "EPSG:2394": [
    "KKJ / Finland zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=4500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs ",
  ],
  "EPSG:2395": [
    "South Yemen / Gauss-Kruger zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2396": [
    "South Yemen / Gauss-Kruger zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=-76,-138,67,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2397": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2398": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2399": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2400": [
    "RT90 2.5 gon W (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs ",
  ],
  "EPSG:2401": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2402": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2403": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2404": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4584": [
    "New Beijing / Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:2405": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2406": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2407": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2408": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2409": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 33",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2410": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 34",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2411": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 35",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2412": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 36",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2413": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 37",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4585": [
    "New Beijing / Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:2414": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 38",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2415": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 39",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2416": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 40",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2417": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 41",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2418": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 42",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2419": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 43",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2420": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 44",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2421": [
    "Beijing 1954 / 3-degree Gauss-Kruger zone 45",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2422": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4586": [
    "New Beijing / Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:2423": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 78E",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2424": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2425": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 84E",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2426": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2427": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 90E",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2428": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2429": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 96E",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2430": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2431": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 102E",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2432": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2433": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 108E",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2434": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2435": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 114E",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2436": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2437": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 120E",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2438": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2439": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 126E",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2440": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2441": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 132E",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3015": [
    "SWEREF99 18 45",
    "+proj=tmerc +lat_0=0 +lon_0=18.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2442": [
    "Beijing 1954 / 3-degree Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2443": [
    "JGD2000 / Japan Plane Rectangular CS I",
    "+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2444": [
    "JGD2000 / Japan Plane Rectangular CS II",
    "+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2445": [
    "JGD2000 / Japan Plane Rectangular CS III",
    "+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2446": [
    "JGD2000 / Japan Plane Rectangular CS IV",
    "+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2447": [
    "JGD2000 / Japan Plane Rectangular CS V",
    "+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2448": [
    "JGD2000 / Japan Plane Rectangular CS VI",
    "+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2449": [
    "JGD2000 / Japan Plane Rectangular CS VII",
    "+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2450": [
    "JGD2000 / Japan Plane Rectangular CS VIII",
    "+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2933": [
    "Segara / UTM zone 50S",
    "+proj=utm +zone=50 +south +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2451": [
    "JGD2000 / Japan Plane Rectangular CS IX",
    "+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2452": [
    "JGD2000 / Japan Plane Rectangular CS X",
    "+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2453": [
    "JGD2000 / Japan Plane Rectangular CS XI",
    "+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2454": [
    "JGD2000 / Japan Plane Rectangular CS XII",
    "+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2455": [
    "JGD2000 / Japan Plane Rectangular CS XIII",
    "+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2456": [
    "JGD2000 / Japan Plane Rectangular CS XIV",
    "+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2457": [
    "JGD2000 / Japan Plane Rectangular CS XV",
    "+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2458": [
    "JGD2000 / Japan Plane Rectangular CS XVI",
    "+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2459": [
    "JGD2000 / Japan Plane Rectangular CS XVII",
    "+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2460": [
    "JGD2000 / Japan Plane Rectangular CS XVIII",
    "+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2461": [
    "JGD2000 / Japan Plane Rectangular CS XIX",
    "+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2462": [
    "Albanian 1987 / Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:2463": [
    "Pulkovo 1995 / Gauss-Kruger CM 21E",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2464": [
    "Pulkovo 1995 / Gauss-Kruger CM 27E",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2465": [
    "Pulkovo 1995 / Gauss-Kruger CM 33E",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2466": [
    "Pulkovo 1995 / Gauss-Kruger CM 39E",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2467": [
    "Pulkovo 1995 / Gauss-Kruger CM 45E",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2468": [
    "Pulkovo 1995 / Gauss-Kruger CM 51E",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2469": [
    "Pulkovo 1995 / Gauss-Kruger CM 57E",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:32602": [
    "WGS 84 / UTM zone 2N",
    "+proj=utm +zone=2 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:2470": [
    "Pulkovo 1995 / Gauss-Kruger CM 63E",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2471": [
    "Pulkovo 1995 / Gauss-Kruger CM 69E",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2472": [
    "Pulkovo 1995 / Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2473": [
    "Pulkovo 1995 / Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2474": [
    "Pulkovo 1995 / Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2475": [
    "Pulkovo 1995 / Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2476": [
    "Pulkovo 1995 / Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2477": [
    "Pulkovo 1995 / Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2478": [
    "Pulkovo 1995 / Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2479": [
    "Pulkovo 1995 / Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2480": [
    "Pulkovo 1995 / Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2481": [
    "Pulkovo 1995 / Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2482": [
    "Pulkovo 1995 / Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2483": [
    "Pulkovo 1995 / Gauss-Kruger CM 141E",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2484": [
    "Pulkovo 1995 / Gauss-Kruger CM 147E",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2485": [
    "Pulkovo 1995 / Gauss-Kruger CM 153E",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2486": [
    "Pulkovo 1995 / Gauss-Kruger CM 159E",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2487": [
    "Pulkovo 1995 / Gauss-Kruger CM 165E",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2488": [
    "Pulkovo 1995 / Gauss-Kruger CM 171E",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2489": [
    "Pulkovo 1995 / Gauss-Kruger CM 177E",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2490": [
    "Pulkovo 1995 / Gauss-Kruger CM 177W",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2491": [
    "Pulkovo 1995 / Gauss-Kruger CM 171W",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2492": [
    "Pulkovo 1942 / Gauss-Kruger CM 9E (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2493": [
    "Pulkovo 1942 / Gauss-Kruger CM 15E (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2494": [
    "Pulkovo 1942 / Gauss-Kruger CM 21E",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2495": [
    "Pulkovo 1942 / Gauss-Kruger CM 27E",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2496": [
    "Pulkovo 1942 / Gauss-Kruger CM 33E",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2497": [
    "Pulkovo 1942 / Gauss-Kruger CM 39E",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2498": [
    "Pulkovo 1942 / Gauss-Kruger CM 45E",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2499": [
    "Pulkovo 1942 / Gauss-Kruger CM 51E",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2500": [
    "Pulkovo 1942 / Gauss-Kruger CM 57E",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2501": [
    "Pulkovo 1942 / Gauss-Kruger CM 63E",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2502": [
    "Pulkovo 1942 / Gauss-Kruger CM 69E",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2503": [
    "Pulkovo 1942 / Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2504": [
    "Pulkovo 1942 / Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2505": [
    "Pulkovo 1942 / Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2506": [
    "Pulkovo 1942 / Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2507": [
    "Pulkovo 1942 / Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2508": [
    "Pulkovo 1942 / Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2509": [
    "Pulkovo 1942 / Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2510": [
    "Pulkovo 1942 / Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2511": [
    "Pulkovo 1942 / Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2512": [
    "Pulkovo 1942 / Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2513": [
    "Pulkovo 1942 / Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2514": [
    "Pulkovo 1942 / Gauss-Kruger CM 141E",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2515": [
    "Pulkovo 1942 / Gauss-Kruger CM 147E",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2516": [
    "Pulkovo 1942 / Gauss-Kruger CM 153E",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2517": [
    "Pulkovo 1942 / Gauss-Kruger CM 159E",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2518": [
    "Pulkovo 1942 / Gauss-Kruger CM 165E",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2519": [
    "Pulkovo 1942 / Gauss-Kruger CM 171E",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2520": [
    "Pulkovo 1942 / Gauss-Kruger CM 177E",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2521": [
    "Pulkovo 1942 / Gauss-Kruger CM 177W",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2522": [
    "Pulkovo 1942 / Gauss-Kruger CM 171W",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2523": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2524": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2525": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2526": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2527": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2528": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2529": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2530": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2531": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2532": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2533": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2534": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2535": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2536": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2537": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2538": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2539": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2540": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 24",
    "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2541": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2542": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2543": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2544": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2545": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2546": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2547": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2548": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2549": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 33",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2550": [
    "Samboja / UTM zone 50S (deprecated)",
    "+proj=utm +zone=50 +south +ellps=bessel +towgs84=-404.78,685.68,45.47,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2551": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 34",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2552": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 35",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2553": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 36",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2554": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 37",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2555": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 38",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2556": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 39",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2557": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 40",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2558": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 41",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2559": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 42",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2560": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 43",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2561": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 44",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2562": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 45",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2563": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 46",
    "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=46500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2564": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 47",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=47500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2565": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 48",
    "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=48500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2566": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 49",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=49500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2567": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 50",
    "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=50500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2568": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 51",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=51500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2569": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 52",
    "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=52500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2570": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 53",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=53500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2571": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 54",
    "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=54500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2572": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 55",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=55500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2573": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 56",
    "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=56500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2574": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 57",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=57500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2575": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 58",
    "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=58500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2576": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 59",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=59500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2577": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 60 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60000000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2578": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 61",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=61500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2579": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 62",
    "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=62500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2580": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 63",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=63500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2581": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 64",
    "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=64500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2582": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 21E",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2583": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 24E",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2584": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 27E",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2585": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 30E",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2586": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 33E",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2587": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 36E",
    "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2588": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 39E",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2589": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 42E",
    "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2590": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 45E",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2591": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 48E",
    "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2592": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 51E",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2593": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 54E",
    "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2594": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 57E",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2595": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 60E",
    "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2596": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 63E",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2597": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 66E",
    "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2598": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 69E",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2599": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 72E",
    "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2600": [
    "Lietuvos Koordinoei Sistema 1994 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2601": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2602": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 78E",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2603": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2604": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 84E",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2605": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2606": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 90E",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2607": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2608": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 96E",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2609": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2610": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 102E",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2611": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2612": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 108E",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2613": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2614": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 114E",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2615": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2616": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 120E",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2617": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2618": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 126E",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2619": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2620": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 132E",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2621": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2622": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 138E",
    "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2623": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 141E",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2624": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 144E",
    "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2625": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 147E",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2626": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 150E",
    "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2627": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 153E",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2628": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 156E",
    "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2629": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 159E",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2630": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 162E",
    "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2631": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 165E",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2632": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 168E",
    "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2633": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 171E",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2634": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 174E",
    "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2635": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 177E",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2636": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 180E",
    "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2637": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 177W",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2638": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 174W",
    "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2639": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 171W",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2640": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 168W",
    "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2641": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2642": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2643": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2644": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2645": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2646": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2647": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2648": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2649": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2650": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2651": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2652": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2653": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2654": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2655": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2656": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2657": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2658": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 24",
    "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2659": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2660": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2661": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2662": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2663": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2664": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2665": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2666": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2667": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 33",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2668": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 34",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2669": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 35",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2670": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 36",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2671": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 37",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2672": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 38",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2673": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 39",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2674": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 40",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2675": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 41",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2676": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 42",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2677": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 43",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2678": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 44",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2679": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 45",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2680": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 46",
    "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=46500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2681": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 47",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=47500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2682": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 48",
    "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=48500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2683": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 49",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=49500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2684": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 50",
    "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=50500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2685": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 51",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=51500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2686": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 52",
    "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=52500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2687": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 53",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=53500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2688": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 54",
    "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=54500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2689": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 55",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=55500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2690": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 56",
    "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=56500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2691": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 57",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=57500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2692": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 58",
    "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=58500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2693": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 59",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=59500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2694": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 60 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60000000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2695": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 61",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=61500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2696": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 62",
    "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=62500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2697": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 63",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=63500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2698": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 64",
    "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=64500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2699": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 21E",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2700": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 24E",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2701": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 27E",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2702": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 30E",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2703": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 33E",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2704": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 36E",
    "+proj=tmerc +lat_0=0 +lon_0=36 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2705": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 39E",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2706": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 42E",
    "+proj=tmerc +lat_0=0 +lon_0=42 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2707": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 45E",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2708": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 48E",
    "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2709": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 51E",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2710": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 54E",
    "+proj=tmerc +lat_0=0 +lon_0=54 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2711": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 57E",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2712": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 60E",
    "+proj=tmerc +lat_0=0 +lon_0=60 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2713": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 63E",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2714": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 66E",
    "+proj=tmerc +lat_0=0 +lon_0=66 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2715": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 69E",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2716": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 72E",
    "+proj=tmerc +lat_0=0 +lon_0=72 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2717": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2718": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 78E",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2719": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2720": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 84E",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2721": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2722": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 90E",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2723": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2724": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 96E",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2725": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2726": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 102E",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2727": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2728": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 108E",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2729": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2730": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 114E",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2731": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2732": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 120E",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2733": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2734": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 126E",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2735": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2736": [
    "Tete / UTM zone 36S",
    "+proj=utm +zone=36 +south +ellps=clrk66 +towgs84=219.315,168.975,-166.145,0.198,5.926,-2.356,-57.104 +units=m +no_defs ",
  ],
  "EPSG:2737": [
    "Tete / UTM zone 37S",
    "+proj=utm +zone=37 +south +ellps=clrk66 +towgs84=219.315,168.975,-166.145,0.198,5.926,-2.356,-57.104 +units=m +no_defs ",
  ],
  "EPSG:2738": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 132E",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2739": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2740": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 138E",
    "+proj=tmerc +lat_0=0 +lon_0=138 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2741": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 141E",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2742": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 144E",
    "+proj=tmerc +lat_0=0 +lon_0=144 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2743": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 147E",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2744": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 150E",
    "+proj=tmerc +lat_0=0 +lon_0=150 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2745": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 153E",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2746": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 156E",
    "+proj=tmerc +lat_0=0 +lon_0=156 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2747": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 159E",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2748": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 162E",
    "+proj=tmerc +lat_0=0 +lon_0=162 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2749": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 165E",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2750": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 168E",
    "+proj=tmerc +lat_0=0 +lon_0=168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2751": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 171E",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2752": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 174E",
    "+proj=tmerc +lat_0=0 +lon_0=174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2753": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 177E",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2754": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 180E",
    "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2755": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 177W",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2756": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 174W",
    "+proj=tmerc +lat_0=0 +lon_0=-174 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2757": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 171W",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2758": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 168W",
    "+proj=tmerc +lat_0=0 +lon_0=-168 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2759": [
    "NAD83(HARN) / Alabama East",
    "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2760": [
    "NAD83(HARN) / Alabama West",
    "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2761": [
    "NAD83(HARN) / Arizona East",
    "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2762": [
    "NAD83(HARN) / Arizona Central",
    "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2763": [
    "NAD83(HARN) / Arizona West",
    "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2764": [
    "NAD83(HARN) / Arkansas North",
    "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2765": [
    "NAD83(HARN) / Arkansas South",
    "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2766": [
    "NAD83(HARN) / California zone 1",
    "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2767": [
    "NAD83(HARN) / California zone 2",
    "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2768": [
    "NAD83(HARN) / California zone 3",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2769": [
    "NAD83(HARN) / California zone 4",
    "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2770": [
    "NAD83(HARN) / California zone 5",
    "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2771": [
    "NAD83(HARN) / California zone 6",
    "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2772": [
    "NAD83(HARN) / Colorado North",
    "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2773": [
    "NAD83(HARN) / Colorado Central",
    "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2774": [
    "NAD83(HARN) / Colorado South",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2775": [
    "NAD83(HARN) / Connecticut",
    "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096 +y_0=152400.3048 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2776": [
    "NAD83(HARN) / Delaware",
    "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2777": [
    "NAD83(HARN) / Florida East",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2778": [
    "NAD83(HARN) / Florida West",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2779": [
    "NAD83(HARN) / Florida North",
    "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2780": [
    "NAD83(HARN) / Georgia East",
    "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2781": [
    "NAD83(HARN) / Georgia West",
    "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2782": [
    "NAD83(HARN) / Hawaii zone 1",
    "+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2783": [
    "NAD83(HARN) / Hawaii zone 2",
    "+proj=tmerc +lat_0=20.33333333333333 +lon_0=-156.6666666666667 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2784": [
    "NAD83(HARN) / Hawaii zone 3",
    "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2785": [
    "NAD83(HARN) / Hawaii zone 4",
    "+proj=tmerc +lat_0=21.83333333333333 +lon_0=-159.5 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2786": [
    "NAD83(HARN) / Hawaii zone 5",
    "+proj=tmerc +lat_0=21.66666666666667 +lon_0=-160.1666666666667 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2787": [
    "NAD83(HARN) / Idaho East",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2788": [
    "NAD83(HARN) / Idaho Central",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2789": [
    "NAD83(HARN) / Idaho West",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2790": [
    "NAD83(HARN) / Illinois East",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2791": [
    "NAD83(HARN) / Illinois West",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2792": [
    "NAD83(HARN) / Indiana East",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=100000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2793": [
    "NAD83(HARN) / Indiana West",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2794": [
    "NAD83(HARN) / Iowa North",
    "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2795": [
    "NAD83(HARN) / Iowa South",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2796": [
    "NAD83(HARN) / Kansas North",
    "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2797": [
    "NAD83(HARN) / Kansas South",
    "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2798": [
    "NAD83(HARN) / Kentucky North",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2799": [
    "NAD83(HARN) / Kentucky South",
    "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2800": [
    "NAD83(HARN) / Louisiana North",
    "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2801": [
    "NAD83(HARN) / Louisiana South",
    "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2802": [
    "NAD83(HARN) / Maine East",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2803": [
    "NAD83(HARN) / Maine West",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2804": [
    "NAD83(HARN) / Maryland",
    "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2805": [
    "NAD83(HARN) / Massachusetts Mainland",
    "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2806": [
    "NAD83(HARN) / Massachusetts Island",
    "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2807": [
    "NAD83(HARN) / Michigan North",
    "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=8000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2808": [
    "NAD83(HARN) / Michigan Central",
    "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=6000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4587": [
    "New Beijing / Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:2809": [
    "NAD83(HARN) / Michigan South",
    "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=4000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2810": [
    "NAD83(HARN) / Minnesota North",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2811": [
    "NAD83(HARN) / Minnesota Central",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2812": [
    "NAD83(HARN) / Minnesota South",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2813": [
    "NAD83(HARN) / Mississippi East",
    "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2814": [
    "NAD83(HARN) / Mississippi West",
    "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2815": [
    "NAD83(HARN) / Missouri East",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2816": [
    "NAD83(HARN) / Missouri Central",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2817": [
    "NAD83(HARN) / Missouri West",
    "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=850000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2818": [
    "NAD83(HARN) / Montana",
    "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2819": [
    "NAD83(HARN) / Nebraska",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2820": [
    "NAD83(HARN) / Nevada East",
    "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000 +y_0=8000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2821": [
    "NAD83(HARN) / Nevada Central",
    "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2822": [
    "NAD83(HARN) / Nevada West",
    "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2823": [
    "NAD83(HARN) / New Hampshire",
    "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2824": [
    "NAD83(HARN) / New Jersey",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2825": [
    "NAD83(HARN) / New Mexico East",
    "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2826": [
    "NAD83(HARN) / New Mexico Central",
    "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2827": [
    "NAD83(HARN) / New Mexico West",
    "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2828": [
    "NAD83(HARN) / New York East",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2829": [
    "NAD83(HARN) / New York Central",
    "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2830": [
    "NAD83(HARN) / New York West",
    "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2831": [
    "NAD83(HARN) / New York Long Island",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2832": [
    "NAD83(HARN) / North Dakota North",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2833": [
    "NAD83(HARN) / North Dakota South",
    "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2834": [
    "NAD83(HARN) / Ohio North",
    "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2868": [
    "NAD83(HARN) / Arizona Central (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2835": [
    "NAD83(HARN) / Ohio South",
    "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2836": [
    "NAD83(HARN) / Oklahoma North",
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2837": [
    "NAD83(HARN) / Oklahoma South",
    "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2838": [
    "NAD83(HARN) / Oregon North",
    "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2839": [
    "NAD83(HARN) / Oregon South",
    "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2840": [
    "NAD83(HARN) / Rhode Island",
    "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2841": [
    "NAD83(HARN) / South Dakota North",
    "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2842": [
    "NAD83(HARN) / South Dakota South",
    "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2843": [
    "NAD83(HARN) / Tennessee",
    "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2844": [
    "NAD83(HARN) / Texas North",
    "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2845": [
    "NAD83(HARN) / Texas North Central",
    "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2846": [
    "NAD83(HARN) / Texas Central",
    "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=700000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2847": [
    "NAD83(HARN) / Texas South Central",
    "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2848": [
    "NAD83(HARN) / Texas South",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2849": [
    "NAD83(HARN) / Utah North",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2850": [
    "NAD83(HARN) / Utah Central",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2851": [
    "NAD83(HARN) / Utah South",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2852": [
    "NAD83(HARN) / Vermont",
    "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2853": [
    "NAD83(HARN) / Virginia North",
    "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2854": [
    "NAD83(HARN) / Virginia South",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2855": [
    "NAD83(HARN) / Washington North",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2856": [
    "NAD83(HARN) / Washington South",
    "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2857": [
    "NAD83(HARN) / West Virginia North",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2858": [
    "NAD83(HARN) / West Virginia South",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2859": [
    "NAD83(HARN) / Wisconsin North",
    "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2860": [
    "NAD83(HARN) / Wisconsin Central",
    "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2861": [
    "NAD83(HARN) / Wisconsin South",
    "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2862": [
    "NAD83(HARN) / Wyoming East",
    "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2863": [
    "NAD83(HARN) / Wyoming East Central",
    "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=400000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2864": [
    "NAD83(HARN) / Wyoming West Central",
    "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2865": [
    "NAD83(HARN) / Wyoming West",
    "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2866": [
    "NAD83(HARN) / Puerto Rico and Virgin Is.",
    "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=200000 +y_0=200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2867": [
    "NAD83(HARN) / Arizona East (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2869": [
    "NAD83(HARN) / Arizona West (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2870": [
    "NAD83(HARN) / California zone 1 (ftUS)",
    "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2871": [
    "NAD83(HARN) / California zone 2 (ftUS)",
    "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2872": [
    "NAD83(HARN) / California zone 3 (ftUS)",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2873": [
    "NAD83(HARN) / California zone 4 (ftUS)",
    "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2874": [
    "NAD83(HARN) / California zone 5 (ftUS)",
    "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2875": [
    "NAD83(HARN) / California zone 6 (ftUS)",
    "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2876": [
    "NAD83(HARN) / Colorado North (ftUS)",
    "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2877": [
    "NAD83(HARN) / Colorado Central (ftUS)",
    "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2878": [
    "NAD83(HARN) / Colorado South (ftUS)",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2879": [
    "NAD83(HARN) / Connecticut (ftUS)",
    "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096012192 +y_0=152400.3048006096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2880": [
    "NAD83(HARN) / Delaware (ftUS)",
    "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2881": [
    "NAD83(HARN) / Florida East (ftUS)",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2882": [
    "NAD83(HARN) / Florida West (ftUS)",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2883": [
    "NAD83(HARN) / Florida North (ftUS)",
    "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2884": [
    "NAD83(HARN) / Georgia East (ftUS)",
    "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2885": [
    "NAD83(HARN) / Georgia West (ftUS)",
    "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2886": [
    "NAD83(HARN) / Idaho East (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2887": [
    "NAD83(HARN) / Idaho Central (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2888": [
    "NAD83(HARN) / Idaho West (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2889": [
    "NAD83(HARN) / Indiana East (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249364.9987299975 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2890": [
    "NAD83(HARN) / Indiana West (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249364.9987299975 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2891": [
    "NAD83(HARN) / Kentucky North (ftUS)",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2892": [
    "NAD83(HARN) / Kentucky South (ftUS)",
    "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000.0001016001 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2893": [
    "NAD83(HARN) / Maryland (ftUS)",
    "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2894": [
    "NAD83(HARN) / Massachusetts Mainland (ftUS)",
    "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2895": [
    "NAD83(HARN) / Massachusetts Island (ftUS)",
    "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2896": [
    "NAD83(HARN) / Michigan North (ft)",
    "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=7999999.999968001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2897": [
    "NAD83(HARN) / Michigan Central (ft)",
    "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=5999999.999976001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2898": [
    "NAD83(HARN) / Michigan South (ft)",
    "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=3999999.999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2899": [
    "NAD83(HARN) / Mississippi East (ftUS)",
    "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2900": [
    "NAD83(HARN) / Mississippi West (ftUS)",
    "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2901": [
    "NAD83(HARN) / Montana (ft)",
    "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2902": [
    "NAD83(HARN) / New Mexico East (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2903": [
    "NAD83(HARN) / New Mexico Central (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2904": [
    "NAD83(HARN) / New Mexico West (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2905": [
    "NAD83(HARN) / New York East (ftUS)",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2906": [
    "NAD83(HARN) / New York Central (ftUS)",
    "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2907": [
    "NAD83(HARN) / New York West (ftUS)",
    "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2908": [
    "NAD83(HARN) / New York Long Island (ftUS)",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2943": [
    "Selvagem Grande / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=intl +towgs84=-289,-124,60,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2909": [
    "NAD83(HARN) / North Dakota North (ft)",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2910": [
    "NAD83(HARN) / North Dakota South (ft)",
    "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2911": [
    "NAD83(HARN) / Oklahoma North (ftUS)",
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2912": [
    "NAD83(HARN) / Oklahoma South (ftUS)",
    "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2913": [
    "NAD83(HARN) / Oregon North (ft)",
    "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2914": [
    "NAD83(HARN) / Oregon South (ft)",
    "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2915": [
    "NAD83(HARN) / Tennessee (ftUS)",
    "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2916": [
    "NAD83(HARN) / Texas North (ftUS)",
    "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000.0001016002 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2917": [
    "NAD83(HARN) / Texas North Central (ftUS)",
    "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2918": [
    "NAD83(HARN) / Texas Central (ftUS)",
    "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=699999.9998983998 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2919": [
    "NAD83(HARN) / Texas South Central (ftUS)",
    "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=3999999.9998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2920": [
    "NAD83(HARN) / Texas South (ftUS)",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000.0000000001 +y_0=5000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2921": [
    "NAD83(HARN) / Utah North (ft)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=999999.9999960001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2922": [
    "NAD83(HARN) / Utah Central (ft)",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=1999999.999992 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2923": [
    "NAD83(HARN) / Utah South (ft)",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.0001504 +y_0=2999999.999988 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2932": [
    "QND95 / Qatar National Grid",
    "+proj=tmerc +lat_0=24.45 +lon_0=51.21666666666667 +k=0.99999 +x_0=200000 +y_0=300000 +ellps=intl +towgs84=-119.425,-303.659,-11.0006,1.1643,0.174458,1.09626,3.65706 +units=m +no_defs ",
  ],
  "EPSG:2924": [
    "NAD83(HARN) / Virginia North (ftUS)",
    "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2925": [
    "NAD83(HARN) / Virginia South (ftUS)",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2926": [
    "NAD83(HARN) / Washington North (ftUS)",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2927": [
    "NAD83(HARN) / Washington South (ftUS)",
    "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2928": [
    "NAD83(HARN) / Wisconsin North (ftUS)",
    "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2929": [
    "NAD83(HARN) / Wisconsin Central (ftUS)",
    "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2930": [
    "NAD83(HARN) / Wisconsin South (ftUS)",
    "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2931": [
    "Beduaram / TM 13 NE",
    "+proj=tmerc +lat_0=0 +lon_0=13 +k=0.9996 +x_0=500000 +y_0=0 +a=6378249.2 +b=6356515 +towgs84=-106,-87,188,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2934": [
    "Segara (Jakarta) / NEIEZ (deprecated)",
    "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +pm=jakarta +units=m +no_defs ",
  ],
  "EPSG:2935": [
    "Pulkovo 1942 / CS63 zone A1",
    "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=41.53333333333333 +k=1 +x_0=1300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2936": [
    "Pulkovo 1942 / CS63 zone A2",
    "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=44.53333333333333 +k=1 +x_0=2300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2937": [
    "Pulkovo 1942 / CS63 zone A3",
    "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=47.53333333333333 +k=1 +x_0=3300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2938": [
    "Pulkovo 1942 / CS63 zone A4",
    "+proj=tmerc +lat_0=0.1166666666666667 +lon_0=50.53333333333333 +k=1 +x_0=4300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2939": [
    "Pulkovo 1942 / CS63 zone K2",
    "+proj=tmerc +lat_0=0.1333333333333333 +lon_0=50.76666666666667 +k=1 +x_0=2300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2940": [
    "Pulkovo 1942 / CS63 zone K3",
    "+proj=tmerc +lat_0=0.1333333333333333 +lon_0=53.76666666666667 +k=1 +x_0=3300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2941": [
    "Pulkovo 1942 / CS63 zone K4",
    "+proj=tmerc +lat_0=0.1333333333333333 +lon_0=56.76666666666667 +k=1 +x_0=4300000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:2942": [
    "Porto Santo / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=intl +towgs84=-499,-249,314,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2944": [
    "NAD83(CSRS) / SCoPQ zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2945": [
    "NAD83(CSRS) / MTM zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2946": [
    "NAD83(CSRS) / MTM zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2947": [
    "NAD83(CSRS) / MTM zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2948": [
    "NAD83(CSRS) / MTM zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2949": [
    "NAD83(CSRS) / MTM zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2950": [
    "NAD83(CSRS) / MTM zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2951": [
    "NAD83(CSRS) / MTM zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2952": [
    "NAD83(CSRS) / MTM zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4588": [
    "New Beijing / Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:2953": [
    "NAD83(CSRS) / New Brunswick Stereographic",
    "+proj=sterea +lat_0=46.5 +lon_0=-66.5 +k=0.999912 +x_0=2500000 +y_0=7500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2954": [
    "NAD83(CSRS) / Prince Edward Isl. Stereographic (NAD83)",
    "+proj=sterea +lat_0=47.25 +lon_0=-63 +k=0.999912 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2955": [
    "NAD83(CSRS) / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2956": [
    "NAD83(CSRS) / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2957": [
    "NAD83(CSRS) / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2958": [
    "NAD83(CSRS) / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2959": [
    "NAD83(CSRS) / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2960": [
    "NAD83(CSRS) / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2961": [
    "NAD83(CSRS) / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2962": [
    "NAD83(CSRS) / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2964": [
    "NAD27 / Alaska Albers",
    "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:2965": [
    "NAD83 / Indiana East (ftUS)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2966": [
    "NAD83 / Indiana West (ftUS)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2967": [
    "NAD83(HARN) / Indiana East (ftUS)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2968": [
    "NAD83(HARN) / Indiana West (ftUS)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:2969": [
    "Fort Marigot / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=intl +towgs84=137,248,-430,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2970": [
    "Guadeloupe 1948 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=intl +towgs84=-467,-16,-300,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2971": [
    "CSG67 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=intl +towgs84=-186,230,110,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2972": [
    "RGFG95 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=GRS80 +towgs84=2,2,-2,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2973": [
    "Martinique 1938 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=intl +towgs84=186,482,151,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2975": [
    "RGR92 / UTM zone 40S",
    "+proj=utm +zone=40 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2976": [
    "Tahiti 52 / UTM zone 6S",
    "+proj=utm +zone=6 +south +ellps=intl +towgs84=162,117,154,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2977": [
    "Tahaa 54 / UTM zone 5S",
    "+proj=utm +zone=5 +south +ellps=intl +towgs84=72.438,345.918,79.486,1.6045,0.8823,0.5565,1.3746 +units=m +no_defs ",
  ],
  "EPSG:2978": [
    "IGN72 Nuku Hiva / UTM zone 7S",
    "+proj=utm +zone=7 +south +ellps=intl +towgs84=84,274,65,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2979": [
    "K0 1949 / UTM zone 42S (deprecated)",
    "+proj=utm +zone=42 +south +ellps=intl +towgs84=145,-187,103,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2980": [
    "Combani 1950 / UTM zone 38S",
    "+proj=utm +zone=38 +south +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2981": [
    "IGN56 Lifou / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=335.47,222.58,-230.94,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2982": [
    "IGN72 Grand Terre / UTM zone 58S (deprecated)",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2983": [
    "ST87 Ouvea / UTM zone 58S (deprecated)",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=-122.383,-188.696,103.344,3.5107,-4.9668,-5.7047,4.4798 +units=m +no_defs ",
  ],
  "EPSG:2984": [
    "RGNC 1991 / Lambert New Caledonia (deprecated)",
    "+proj=lcc +lat_1=-20.66666666666667 +lat_2=-22.33333333333333 +lat_0=-21.5 +lon_0=166 +x_0=400000 +y_0=300000 +ellps=intl +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2987": [
    "Saint Pierre et Miquelon 1950 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=clrk66 +towgs84=30,430,368,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2988": [
    "MOP78 / UTM zone 1S",
    "+proj=utm +zone=1 +south +ellps=intl +towgs84=253,-132,-127,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2989": [
    "RRAF 1991 / UTM zone 20N (deprecated)",
    "+proj=utm +zone=20 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2990": [
    "Reunion 1947 / TM Reunion (deprecated)",
    "+proj=tmerc +lat_0=-21.11666666666667 +lon_0=55.53333333333333 +k=1 +x_0=50000 +y_0=160000 +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2991": [
    "NAD83 / Oregon Lambert",
    "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2992": [
    "NAD83 / Oregon Lambert (ft)",
    "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2993": [
    "NAD83(HARN) / Oregon Lambert",
    "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2994": [
    "NAD83(HARN) / Oregon Lambert (ft)",
    "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:2995": [
    "IGN53 Mare / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=287.58,177.78,-135.41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2996": [
    "ST84 Ile des Pins / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=-13,-348,292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2997": [
    "ST71 Belep / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=-480.26,-438.32,-643.429,16.3119,20.1721,-4.0349,-111.7 +units=m +no_defs ",
  ],
  "EPSG:2998": [
    "NEA74 Noumea / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:2999": [
    "Grand Comoros / UTM zone 38S",
    "+proj=utm +zone=38 +south +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:3000": [
    "Segara / NEIEZ",
    "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-403,684,41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3001": [
    "Batavia / NEIEZ",
    "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3002": [
    "Makassar / NEIEZ",
    "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3003": [
    "Monte Mario / Italy zone 1",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +units=m +no_defs ",
  ],
  "EPSG:3004": [
    "Monte Mario / Italy zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9996 +x_0=2520000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +units=m +no_defs ",
  ],
  "EPSG:3005": [
    "NAD83 / BC Albers",
    "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3006": [
    "SWEREF99 TM",
    "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3007": [
    "SWEREF99 12 00",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3008": [
    "SWEREF99 13 30",
    "+proj=tmerc +lat_0=0 +lon_0=13.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3009": [
    "SWEREF99 15 00",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3010": [
    "SWEREF99 16 30",
    "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3011": [
    "SWEREF99 18 00",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3012": [
    "SWEREF99 14 15",
    "+proj=tmerc +lat_0=0 +lon_0=14.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3013": [
    "SWEREF99 15 45",
    "+proj=tmerc +lat_0=0 +lon_0=15.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3014": [
    "SWEREF99 17 15",
    "+proj=tmerc +lat_0=0 +lon_0=17.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3016": [
    "SWEREF99 20 15",
    "+proj=tmerc +lat_0=0 +lon_0=20.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3017": [
    "SWEREF99 21 45",
    "+proj=tmerc +lat_0=0 +lon_0=21.75 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3018": [
    "SWEREF99 23 15",
    "+proj=tmerc +lat_0=0 +lon_0=23.25 +k=1 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3019": [
    "RT90 7.5 gon V",
    "+proj=tmerc +lat_0=0 +lon_0=11.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs ",
  ],
  "EPSG:3020": [
    "RT90 5 gon V",
    "+proj=tmerc +lat_0=0 +lon_0=13.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs ",
  ],
  "EPSG:3021": [
    "RT90 2.5 gon V",
    "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs ",
  ],
  "EPSG:3022": [
    "RT90 0 gon",
    "+proj=tmerc +lat_0=0 +lon_0=18.05827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs ",
  ],
  "EPSG:3023": [
    "RT90 2.5 gon O",
    "+proj=tmerc +lat_0=0 +lon_0=20.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs ",
  ],
  "EPSG:3024": [
    "RT90 5 gon O",
    "+proj=tmerc +lat_0=0 +lon_0=22.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=414.1,41.3,603.1,-0.855,2.141,-7.023,0 +units=m +no_defs ",
  ],
  "EPSG:3025": [
    "RT38 7.5 gon V",
    "+proj=tmerc +lat_0=0 +lon_0=11.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3026": [
    "RT38 5 gon V",
    "+proj=tmerc +lat_0=0 +lon_0=13.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3027": [
    "RT38 2.5 gon V",
    "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3028": [
    "RT38 0 gon",
    "+proj=tmerc +lat_0=0 +lon_0=18.05827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3029": [
    "RT38 2.5 gon O",
    "+proj=tmerc +lat_0=0 +lon_0=20.30827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3030": [
    "RT38 5 gon O",
    "+proj=tmerc +lat_0=0 +lon_0=22.55827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3031": [
    "WGS 84 / Antarctic Polar Stereographic",
    "+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3032": [
    "WGS 84 / Australian Antarctic Polar Stereographic",
    "+proj=stere +lat_0=-90 +lat_ts=-71 +lon_0=70 +k=1 +x_0=6000000 +y_0=6000000 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3033": [
    "WGS 84 / Australian Antarctic Lambert",
    "+proj=lcc +lat_1=-68.5 +lat_2=-74.5 +lat_0=-50 +lon_0=70 +x_0=6000000 +y_0=6000000 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3034": [
    "ETRS89 / ETRS-LCC",
    "+proj=lcc +lat_1=35 +lat_2=65 +lat_0=52 +lon_0=10 +x_0=4000000 +y_0=2800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3035": [
    "ETRS89 / ETRS-LAEA",
    "+proj=laea +lat_0=52 +lon_0=10 +x_0=4321000 +y_0=3210000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3036": [
    "Moznet / UTM zone 36S",
    "+proj=utm +zone=36 +south +ellps=WGS84 +towgs84=0,0,0,-0,-0,-0,0 +units=m +no_defs ",
  ],
  "EPSG:3037": [
    "Moznet / UTM zone 37S",
    "+proj=utm +zone=37 +south +ellps=WGS84 +towgs84=0,0,0,-0,-0,-0,0 +units=m +no_defs ",
  ],
  "EPSG:3038": [
    "ETRS89 / ETRS-TM26",
    "+proj=utm +zone=26 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3039": [
    "ETRS89 / ETRS-TM27",
    "+proj=utm +zone=27 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3040": [
    "ETRS89 / ETRS-TM28",
    "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3041": [
    "ETRS89 / ETRS-TM29",
    "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3042": [
    "ETRS89 / ETRS-TM30",
    "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3043": [
    "ETRS89 / ETRS-TM31",
    "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3044": [
    "ETRS89 / ETRS-TM32",
    "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3045": [
    "ETRS89 / ETRS-TM33",
    "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3046": [
    "ETRS89 / ETRS-TM34",
    "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3047": [
    "ETRS89 / ETRS-TM35",
    "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3048": [
    "ETRS89 / ETRS-TM36",
    "+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3049": [
    "ETRS89 / ETRS-TM37",
    "+proj=utm +zone=37 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3050": [
    "ETRS89 / ETRS-TM38",
    "+proj=utm +zone=38 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3051": [
    "ETRS89 / ETRS-TM39",
    "+proj=utm +zone=39 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3054": [
    "Hjorsey 1955 / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3055": [
    "Hjorsey 1955 / UTM zone 27N",
    "+proj=utm +zone=27 +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3056": [
    "Hjorsey 1955 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=intl +towgs84=-73,46,-86,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3057": [
    "ISN93 / Lambert 1993",
    "+proj=lcc +lat_1=64.25 +lat_2=65.75 +lat_0=65 +lon_0=-19 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3058": [
    "Helle 1954 / Jan Mayen Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-8.5 +k=1 +x_0=50000 +y_0=-7800000 +ellps=intl +towgs84=982.609,552.753,-540.873,6.68163,-31.6115,-19.8482,16.805 +units=m +no_defs ",
  ],
  "EPSG:3059": [
    "LKS92 / Latvia TM",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=-6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3060": [
    "IGN72 Grande Terre / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=-11.64,-348.6,291.98,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3061": [
    "Porto Santo 1995 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=intl +towgs84=-502.862,-247.438,312.724,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3062": [
    "Azores Oriental 1995 / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=intl +towgs84=-204.619,140.176,55.226,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3063": [
    "Azores Central 1995 / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=intl +towgs84=-106.226,166.366,-37.893,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3064": [
    "IGM95 / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3065": [
    "IGM95 / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3101": [
    "JGD2000 / UTM zone 55N",
    "+proj=utm +zone=55 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3066": [
    "ED50 / Jordan TM",
    "+proj=tmerc +lat_0=0 +lon_0=37 +k=0.9998 +x_0=500000 +y_0=-3000000 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3067": [
    "ETRS89 / ETRS-TM35FIN",
    "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3068": [
    "DHDN / Soldner Berlin",
    "+proj=cass +lat_0=52.41864827777778 +lon_0=13.62720366666667 +x_0=40000 +y_0=10000 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:3069": [
    "NAD27 / Wisconsin Transverse Mercator",
    "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=500000 +y_0=-4500000 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3070": [
    "NAD83 / Wisconsin Transverse Mercator",
    "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=520000 +y_0=-4480000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3071": [
    "NAD83(HARN) / Wisconsin Transverse Mercator",
    "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=520000 +y_0=-4480000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3072": [
    "NAD83 / Maine CS2000 East",
    "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-67.875 +k=0.99998 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3073": [
    "NAD83 / Maine CS2000 Central (deprecated)",
    "+proj=tmerc +lat_0=43 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3074": [
    "NAD83 / Maine CS2000 West",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.375 +k=0.99998 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4589": [
    "New Beijing / Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:3075": [
    "NAD83(HARN) / Maine CS2000 East",
    "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-67.875 +k=0.99998 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3076": [
    "NAD83(HARN) / Maine CS2000 Central (deprecated)",
    "+proj=tmerc +lat_0=43 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3077": [
    "NAD83(HARN) / Maine CS2000 West",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.375 +k=0.99998 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3078": [
    "NAD83 / Michigan Oblique Mercator",
    "+proj=omerc +lat_0=45.30916666666666 +lonc=-86 +alpha=337.25556 +k=0.9996 +x_0=2546731.496 +y_0=-4354009.816 +gamma=337.25556 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3079": [
    "NAD83(HARN) / Michigan Oblique Mercator",
    "+proj=omerc +lat_0=45.30916666666666 +lonc=-86 +alpha=337.25556 +k=0.9996 +x_0=2546731.496 +y_0=-4354009.816 +gamma=337.25556 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3080": [
    "NAD27 / Shackleford",
    "+proj=lcc +lat_1=27.41666666666667 +lat_2=34.91666666666666 +lat_0=31.16666666666667 +lon_0=-100 +x_0=914400 +y_0=914400 +datum=NAD27 +units=ft +no_defs ",
  ],
  "EPSG:3081": [
    "NAD83 / Texas State Mapping System",
    "+proj=lcc +lat_1=27.41666666666667 +lat_2=34.91666666666666 +lat_0=31.16666666666667 +lon_0=-100 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3082": [
    "NAD83 / Texas Centric Lambert Conformal",
    "+proj=lcc +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3169": [
    "RGNC91-93 / UTM zone 57S",
    "+proj=utm +zone=57 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3083": [
    "NAD83 / Texas Centric Albers Equal Area",
    "+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3084": [
    "NAD83(HARN) / Texas Centric Lambert Conformal",
    "+proj=lcc +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3085": [
    "NAD83(HARN) / Texas Centric Albers Equal Area",
    "+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3086": [
    "NAD83 / Florida GDL Albers",
    "+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3087": [
    "NAD83(HARN) / Florida GDL Albers",
    "+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3088": [
    "NAD83 / Kentucky Single Zone",
    "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3089": [
    "NAD83 / Kentucky Single Zone (ftUS)",
    "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3090": [
    "NAD83(HARN) / Kentucky Single Zone",
    "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26707": [
    "NAD27 / UTM zone 7N",
    "+proj=utm +zone=7 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3091": [
    "NAD83(HARN) / Kentucky Single Zone (ftUS)",
    "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3092": [
    "Tokyo / UTM zone 51N",
    "+proj=utm +zone=51 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3093": [
    "Tokyo / UTM zone 52N",
    "+proj=utm +zone=52 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3094": [
    "Tokyo / UTM zone 53N",
    "+proj=utm +zone=53 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3095": [
    "Tokyo / UTM zone 54N",
    "+proj=utm +zone=54 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3096": [
    "Tokyo / UTM zone 55N",
    "+proj=utm +zone=55 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3097": [
    "JGD2000 / UTM zone 51N",
    "+proj=utm +zone=51 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3098": [
    "JGD2000 / UTM zone 52N",
    "+proj=utm +zone=52 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3099": [
    "JGD2000 / UTM zone 53N",
    "+proj=utm +zone=53 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3100": [
    "JGD2000 / UTM zone 54N",
    "+proj=utm +zone=54 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3102": [
    "American Samoa 1962 / American Samoa Lambert",
    "+proj=lcc +lat_1=-14.26666666666667 +lat_0=-14.26666666666667 +lon_0=-170 +k_0=1 +x_0=152400.3048006096 +y_0=95169.31165862332 +ellps=clrk66 +towgs84=-115,118,426,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3103": [
    "Mauritania 1999 / UTM zone 28N (deprecated)",
    "+proj=utm +zone=28 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3104": [
    "Mauritania 1999 / UTM zone 29N (deprecated)",
    "+proj=utm +zone=29 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3105": [
    "Mauritania 1999 / UTM zone 30N (deprecated)",
    "+proj=utm +zone=30 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3106": [
    "Gulshan 303 / Bangladesh Transverse Mercator",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=0.9996 +x_0=500000 +y_0=0 +a=6377276.345 +b=6356075.41314024 +towgs84=283.7,735.9,261.1,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3107": [
    "GDA94 / SA Lambert",
    "+proj=lcc +lat_1=-28 +lat_2=-36 +lat_0=-32 +lon_0=135 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3108": [
    "ETRS89 / Guernsey Grid",
    "+proj=tmerc +lat_0=49.5 +lon_0=-2.416666666666667 +k=0.999997 +x_0=47000 +y_0=50000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3109": [
    "ETRS89 / Jersey Transverse Mercator",
    "+proj=tmerc +lat_0=49.225 +lon_0=-2.135 +k=0.9999999000000001 +x_0=40000 +y_0=70000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3110": [
    "AGD66 / Vicgrid66",
    "+proj=lcc +lat_1=-36 +lat_2=-38 +lat_0=-37 +lon_0=145 +x_0=2500000 +y_0=4500000 +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:3111": [
    "GDA94 / Vicgrid94",
    "+proj=lcc +lat_1=-36 +lat_2=-38 +lat_0=-37 +lon_0=145 +x_0=2500000 +y_0=2500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3112": [
    "GDA94 / Geoscience Australia Lambert",
    "+proj=lcc +lat_1=-18 +lat_2=-36 +lat_0=0 +lon_0=134 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3113": [
    "GDA94 / BCSG02",
    "+proj=tmerc +lat_0=-28 +lon_0=153 +k=0.99999 +x_0=50000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3114": [
    "MAGNA-SIRGAS / Colombia Far West zone",
    "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-80.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3115": [
    "MAGNA-SIRGAS / Colombia West zone",
    "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-77.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3116": [
    "MAGNA-SIRGAS / Colombia Bogota zone",
    "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-74.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3117": [
    "MAGNA-SIRGAS / Colombia East Central zone",
    "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-71.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3118": [
    "MAGNA-SIRGAS / Colombia East zone",
    "+proj=tmerc +lat_0=4.596200416666666 +lon_0=-68.07750791666666 +k=1 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3119": [
    "Douala 1948 / AEF west",
    "+proj=tmerc +lat_0=0 +lon_0=10.5 +k=0.999 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=-206.1,-174.7,-87.7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3120": [
    "Pulkovo 1942(58) / Poland zone I",
    "+proj=sterea +lat_0=50.625 +lon_0=21.08333333333333 +k=0.9998 +x_0=4637000 +y_0=5467000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3121": [
    "PRS92 / Philippines zone 1",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs ",
  ],
  "EPSG:3122": [
    "PRS92 / Philippines zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs ",
  ],
  "EPSG:3123": [
    "PRS92 / Philippines zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs ",
  ],
  "EPSG:3124": [
    "PRS92 / Philippines zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs ",
  ],
  "EPSG:3125": [
    "PRS92 / Philippines zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=125 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-127.62,-67.24,-47.04,-3.068,4.903,1.578,-1.06 +units=m +no_defs ",
  ],
  "EPSG:3126": [
    "ETRS89 / ETRS-GK19FIN",
    "+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3127": [
    "ETRS89 / ETRS-GK20FIN",
    "+proj=tmerc +lat_0=0 +lon_0=20 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3128": [
    "ETRS89 / ETRS-GK21FIN",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3129": [
    "ETRS89 / ETRS-GK22FIN",
    "+proj=tmerc +lat_0=0 +lon_0=22 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3130": [
    "ETRS89 / ETRS-GK23FIN",
    "+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3131": [
    "ETRS89 / ETRS-GK24FIN",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3132": [
    "ETRS89 / ETRS-GK25FIN",
    "+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3133": [
    "ETRS89 / ETRS-GK26FIN",
    "+proj=tmerc +lat_0=0 +lon_0=26 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3134": [
    "ETRS89 / ETRS-GK27FIN",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3135": [
    "ETRS89 / ETRS-GK28FIN",
    "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3136": [
    "ETRS89 / ETRS-GK29FIN",
    "+proj=tmerc +lat_0=0 +lon_0=29 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3137": [
    "ETRS89 / ETRS-GK30FIN",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3138": [
    "ETRS89 / ETRS-GK31FIN",
    "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3140": [
    "Viti Levu 1912 / Viti Levu Grid",
    "+proj=cass +lat_0=-18 +lon_0=178 +x_0=109435.392 +y_0=141622.272 +a=6378306.3696 +b=6356571.996 +towgs84=51,391,-36,0,0,0,0 +to_meter=0.201168 +no_defs ",
  ],
  "EPSG:3141": [
    "Fiji 1956 / UTM zone 60S",
    "+proj=utm +zone=60 +south +ellps=intl +towgs84=265.025,384.929,-194.046,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3142": [
    "Fiji 1956 / UTM zone 1S",
    "+proj=utm +zone=1 +south +ellps=intl +towgs84=265.025,384.929,-194.046,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3143": [
    "Fiji 1986 / Fiji Map Grid (deprecated)",
    "+proj=tmerc +lat_0=-17 +lon_0=178.75 +k=0.99985 +x_0=2000000 +y_0=4000000 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:3146": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3147": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger CM 18E",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3148": [
    "Indian 1960 / UTM zone 48N",
    "+proj=utm +zone=48 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3149": [
    "Indian 1960 / UTM zone 49N",
    "+proj=utm +zone=49 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3150": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3151": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger CM 18E",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3152": [
    "ST74",
    "+proj=tmerc +lat_0=0 +lon_0=18.05779 +k=0.99999425 +x_0=100178.1808 +y_0=-6500614.7836 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3153": [
    "NAD83(CSRS) / BC Albers",
    "+proj=aea +lat_1=50 +lat_2=58.5 +lat_0=45 +lon_0=-126 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3154": [
    "NAD83(CSRS) / UTM zone 7N",
    "+proj=utm +zone=7 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3155": [
    "NAD83(CSRS) / UTM zone 8N",
    "+proj=utm +zone=8 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3156": [
    "NAD83(CSRS) / UTM zone 9N",
    "+proj=utm +zone=9 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3157": [
    "NAD83(CSRS) / UTM zone 10N",
    "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3158": [
    "NAD83(CSRS) / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3159": [
    "NAD83(CSRS) / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3160": [
    "NAD83(CSRS) / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3161": [
    "NAD83 / Ontario MNR Lambert",
    "+proj=lcc +lat_1=44.5 +lat_2=53.5 +lat_0=0 +lon_0=-85 +x_0=930000 +y_0=6430000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3162": [
    "NAD83(CSRS) / Ontario MNR Lambert",
    "+proj=lcc +lat_1=44.5 +lat_2=53.5 +lat_0=0 +lon_0=-85 +x_0=930000 +y_0=6430000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3163": [
    "RGNC91-93 / Lambert New Caledonia",
    "+proj=lcc +lat_1=-20.66666666666667 +lat_2=-22.33333333333333 +lat_0=-21.5 +lon_0=166 +x_0=400000 +y_0=300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3164": [
    "ST87 Ouvea / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=WGS84 +towgs84=-56.263,16.136,-22.856,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3165": [
    "NEA74 Noumea / Noumea Lambert",
    "+proj=lcc +lat_1=-22.24469175 +lat_2=-22.29469175 +lat_0=-22.26969175 +lon_0=166.44242575 +x_0=0.66 +y_0=1.02 +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3166": [
    "NEA74 Noumea / Noumea Lambert 2",
    "+proj=lcc +lat_1=-22.24472222222222 +lat_2=-22.29472222222222 +lat_0=-22.26972222222222 +lon_0=166.4425 +x_0=8.313000000000001 +y_0=-2.354 +ellps=intl +towgs84=-10.18,-350.43,291.37,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3167": [
    "Kertau (RSO) / RSO Malaya (ch)",
    "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257905 +k=0.99984 +x_0=40000 +y_0=0 +gamma=323.1301023611111 +a=6377295.664 +b=6356094.667915204 +to_meter=20.116756 +no_defs ",
  ],
  "EPSG:3168": [
    "Kertau (RSO) / RSO Malaya (m)",
    "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257905 +k=0.99984 +x_0=804670.24 +y_0=0 +gamma=323.1301023611111 +a=6377295.664 +b=6356094.667915204 +units=m +no_defs ",
  ],
  "EPSG:3170": [
    "RGNC91-93 / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3171": [
    "RGNC91-93 / UTM zone 59S",
    "+proj=utm +zone=59 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3172": [
    "IGN53 Mare / UTM zone 59S",
    "+proj=utm +zone=59 +south +ellps=intl +towgs84=287.58,177.78,-135.41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3174": [
    "NAD83 / Great Lakes Albers",
    "+proj=aea +lat_1=42.122774 +lat_2=49.01518 +lat_0=45.568977 +lon_0=-84.455955 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3175": [
    "NAD83 / Great Lakes and St Lawrence Albers",
    "+proj=aea +lat_1=42.122774 +lat_2=49.01518 +lat_0=45.568977 +lon_0=-83.248627 +x_0=1000000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3176": [
    "Indian 1960 / TM 106 NE",
    "+proj=tmerc +lat_0=0 +lon_0=106 +k=0.9996 +x_0=500000 +y_0=0 +a=6377276.345 +b=6356075.41314024 +towgs84=198,881,317,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3177": [
    "LGD2006 / Libya TM",
    "+proj=tmerc +lat_0=0 +lon_0=17 +k=0.9965000000000001 +x_0=1000000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3178": [
    "GR96 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3179": [
    "GR96 / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3180": [
    "GR96 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3181": [
    "GR96 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3182": [
    "GR96 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3183": [
    "GR96 / UTM zone 23N",
    "+proj=utm +zone=23 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3184": [
    "GR96 / UTM zone 24N",
    "+proj=utm +zone=24 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3185": [
    "GR96 / UTM zone 25N",
    "+proj=utm +zone=25 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3186": [
    "GR96 / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3187": [
    "GR96 / UTM zone 27N",
    "+proj=utm +zone=27 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3188": [
    "GR96 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3189": [
    "GR96 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3190": [
    "LGD2006 / Libya TM zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3191": [
    "LGD2006 / Libya TM zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=11 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3192": [
    "LGD2006 / Libya TM zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=13 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3193": [
    "LGD2006 / Libya TM zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3194": [
    "LGD2006 / Libya TM zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=17 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3195": [
    "LGD2006 / Libya TM zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=19 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3196": [
    "LGD2006 / Libya TM zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3197": [
    "LGD2006 / Libya TM zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=23 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3198": [
    "LGD2006 / Libya TM zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=25 +k=0.99995 +x_0=200000 +y_0=0 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3199": [
    "LGD2006 / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3200": [
    "FD58 / Iraq zone",
    "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=45 +k_0=0.9987864078000001 +x_0=1500000 +y_0=1166200 +ellps=clrk80 +towgs84=-239.1,-170.02,397.5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3201": [
    "LGD2006 / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3202": [
    "LGD2006 / UTM zone 34N",
    "+proj=utm +zone=34 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3203": [
    "LGD2006 / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=intl +towgs84=-208.406,-109.878,-2.5764,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3204": [
    "WGS 84 / SCAR IMW SP19-20",
    "+proj=lcc +lat_1=-60.66666666666666 +lat_2=-63.33333333333334 +lat_0=-90 +lon_0=-66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3205": [
    "WGS 84 / SCAR IMW SP21-22",
    "+proj=lcc +lat_1=-60.66666666666666 +lat_2=-63.33333333333334 +lat_0=-90 +lon_0=-54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3206": [
    "WGS 84 / SCAR IMW SP23-24",
    "+proj=lcc +lat_1=-60.66666666666666 +lat_2=-63.33333333333334 +lat_0=-90 +lon_0=-42 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3207": [
    "WGS 84 / SCAR IMW SQ01-02",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=-174 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3208": [
    "WGS 84 / SCAR IMW SQ19-20",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=-66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3209": [
    "WGS 84 / SCAR IMW SQ21-22",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=-54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3210": [
    "WGS 84 / SCAR IMW SQ37-38",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=42 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3211": [
    "WGS 84 / SCAR IMW SQ39-40",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3212": [
    "WGS 84 / SCAR IMW SQ41-42",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3213": [
    "WGS 84 / SCAR IMW SQ43-44",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=78 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3214": [
    "WGS 84 / SCAR IMW SQ45-46",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3215": [
    "WGS 84 / SCAR IMW SQ47-48",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=102 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3216": [
    "WGS 84 / SCAR IMW SQ49-50",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=114 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3217": [
    "WGS 84 / SCAR IMW SQ51-52",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=126 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3218": [
    "WGS 84 / SCAR IMW SQ53-54",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=138 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3219": [
    "WGS 84 / SCAR IMW SQ55-56",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=150 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3220": [
    "WGS 84 / SCAR IMW SQ57-58",
    "+proj=lcc +lat_1=-64.66666666666667 +lat_2=-67.33333333333333 +lat_0=-90 +lon_0=162 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3221": [
    "WGS 84 / SCAR IMW SR13-14",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-102 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3222": [
    "WGS 84 / SCAR IMW SR15-16",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3223": [
    "WGS 84 / SCAR IMW SR17-18",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-78 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3224": [
    "WGS 84 / SCAR IMW SR19-20",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3225": [
    "WGS 84 / SCAR IMW SR27-28",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-18 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3226": [
    "WGS 84 / SCAR IMW SR29-30",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=-6 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3227": [
    "WGS 84 / SCAR IMW SR31-32",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=6 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3228": [
    "WGS 84 / SCAR IMW SR33-34",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=18 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3229": [
    "WGS 84 / SCAR IMW SR35-36",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=30 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3230": [
    "WGS 84 / SCAR IMW SR37-38",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=42 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3231": [
    "WGS 84 / SCAR IMW SR39-40",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=54 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3232": [
    "WGS 84 / SCAR IMW SR41-42",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=66 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3233": [
    "WGS 84 / SCAR IMW SR43-44",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=78 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3234": [
    "WGS 84 / SCAR IMW SR45-46",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3235": [
    "WGS 84 / SCAR IMW SR47-48",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=102 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3236": [
    "WGS 84 / SCAR IMW SR49-50",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=114 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3237": [
    "WGS 84 / SCAR IMW SR51-52",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=126 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3238": [
    "WGS 84 / SCAR IMW SR53-54",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=138 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3239": [
    "WGS 84 / SCAR IMW SR55-56",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=150 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3240": [
    "WGS 84 / SCAR IMW SR57-58",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=162 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3241": [
    "WGS 84 / SCAR IMW SR59-60",
    "+proj=lcc +lat_1=-68.66666666666667 +lat_2=-71.33333333333333 +lat_0=-90 +lon_0=174 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3242": [
    "WGS 84 / SCAR IMW SS04-06",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-153 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3243": [
    "WGS 84 / SCAR IMW SS07-09",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-135 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3244": [
    "WGS 84 / SCAR IMW SS10-12",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-117 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3245": [
    "WGS 84 / SCAR IMW SS13-15",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-99 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3246": [
    "WGS 84 / SCAR IMW SS16-18",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-81 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3247": [
    "WGS 84 / SCAR IMW SS19-21",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-63 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3248": [
    "WGS 84 / SCAR IMW SS25-27",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-27 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3249": [
    "WGS 84 / SCAR IMW SS28-30",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=-9 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3250": [
    "WGS 84 / SCAR IMW SS31-33",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=9 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3251": [
    "WGS 84 / SCAR IMW SS34-36",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=27 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3252": [
    "WGS 84 / SCAR IMW SS37-39",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=45 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3253": [
    "WGS 84 / SCAR IMW SS40-42",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=63 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3254": [
    "WGS 84 / SCAR IMW SS43-45",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=81 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3255": [
    "WGS 84 / SCAR IMW SS46-48",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=99 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3256": [
    "WGS 84 / SCAR IMW SS49-51",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=117 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3257": [
    "WGS 84 / SCAR IMW SS52-54",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=135 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3258": [
    "WGS 84 / SCAR IMW SS55-57",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=153 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3259": [
    "WGS 84 / SCAR IMW SS58-60",
    "+proj=lcc +lat_1=-72.66666666666667 +lat_2=-75.33333333333333 +lat_0=-90 +lon_0=171 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3260": [
    "WGS 84 / SCAR IMW ST01-04",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-168 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3261": [
    "WGS 84 / SCAR IMW ST05-08",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-144 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3262": [
    "WGS 84 / SCAR IMW ST09-12",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-120 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3263": [
    "WGS 84 / SCAR IMW ST13-16",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-96 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3264": [
    "WGS 84 / SCAR IMW ST17-20",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-72 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3265": [
    "WGS 84 / SCAR IMW ST21-24",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-48 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3266": [
    "WGS 84 / SCAR IMW ST25-28",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=-24 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3267": [
    "WGS 84 / SCAR IMW ST29-32",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3268": [
    "WGS 84 / SCAR IMW ST33-36",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=24 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3269": [
    "WGS 84 / SCAR IMW ST37-40",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=48 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3270": [
    "WGS 84 / SCAR IMW ST41-44",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=72 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3271": [
    "WGS 84 / SCAR IMW ST45-48",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=96 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3272": [
    "WGS 84 / SCAR IMW ST49-52",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=120 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3273": [
    "WGS 84 / SCAR IMW ST53-56",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=144 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3274": [
    "WGS 84 / SCAR IMW ST57-60",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=168 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3275": [
    "WGS 84 / SCAR IMW SU01-05",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-165 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3276": [
    "WGS 84 / SCAR IMW SU06-10",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-135 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3277": [
    "WGS 84 / SCAR IMW SU11-15",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-105 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3278": [
    "WGS 84 / SCAR IMW SU16-20",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-75 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3279": [
    "WGS 84 / SCAR IMW SU21-25",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3280": [
    "WGS 84 / SCAR IMW SU26-30",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-15 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3281": [
    "WGS 84 / SCAR IMW SU31-35",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=15 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3282": [
    "WGS 84 / SCAR IMW SU36-40",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3283": [
    "WGS 84 / SCAR IMW SU41-45",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=75 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3284": [
    "WGS 84 / SCAR IMW SU46-50",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=105 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3285": [
    "WGS 84 / SCAR IMW SU51-55",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=135 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3286": [
    "WGS 84 / SCAR IMW SU56-60",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=165 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3287": [
    "WGS 84 / SCAR IMW SV01-10",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3288": [
    "WGS 84 / SCAR IMW SV11-20",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-90 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3289": [
    "WGS 84 / SCAR IMW SV21-30",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=-30 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3290": [
    "WGS 84 / SCAR IMW SV31-40",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=30 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3291": [
    "WGS 84 / SCAR IMW SV41-50",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=90 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3292": [
    "WGS 84 / SCAR IMW SV51-60",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3293": [
    "WGS 84 / SCAR IMW SW01-60",
    "+proj=stere +lat_0=-90 +lat_ts=-80.23861111111111 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3294": [
    "WGS 84 / USGS Transantarctic Mountains",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-78 +lon_0=162 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3296": [
    "RGPF / UTM zone 5S",
    "+proj=utm +zone=5 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs ",
  ],
  "EPSG:3297": [
    "RGPF / UTM zone 6S",
    "+proj=utm +zone=6 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs ",
  ],
  "EPSG:3298": [
    "RGPF / UTM zone 7S",
    "+proj=utm +zone=7 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs ",
  ],
  "EPSG:3299": [
    "RGPF / UTM zone 8S",
    "+proj=utm +zone=8 +south +ellps=GRS80 +towgs84=0.072,-0.507,-0.245,-0.0183,0.0003,-0.007,-0.0093 +units=m +no_defs ",
  ],
  "EPSG:3300": [
    "Estonian Coordinate System of 1992",
    "+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0.055,-0.541,-0.185,0.0183,-0.0003,-0.007,-0.014 +units=m +no_defs ",
  ],
  "EPSG:3301": [
    "Estonian Coordinate System of 1997",
    "+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3302": [
    "IGN63 Hiva Oa / UTM zone 7S",
    "+proj=utm +zone=7 +south +ellps=intl +towgs84=410.721,55.049,80.746,2.5779,2.3514,0.6664,17.3311 +units=m +no_defs ",
  ],
  "EPSG:3303": [
    "Fatu Iva 72 / UTM zone 7S",
    "+proj=utm +zone=7 +south +ellps=intl +towgs84=347.103,1078.12,2623.92,-33.8875,70.6773,-9.3943,186.074 +units=m +no_defs ",
  ],
  "EPSG:3304": [
    "Tahiti 79 / UTM zone 6S",
    "+proj=utm +zone=6 +south +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:3305": [
    "Moorea 87 / UTM zone 6S",
    "+proj=utm +zone=6 +south +ellps=intl +towgs84=215.525,149.593,176.229,-3.2624,-1.692,-1.1571,10.4773 +units=m +no_defs ",
  ],
  "EPSG:3306": [
    "Maupiti 83 / UTM zone 5S",
    "+proj=utm +zone=5 +south +ellps=intl +towgs84=217.037,86.959,23.956,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3307": [
    "Nakhl-e Ghanem / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=WGS84 +towgs84=0,-0.15,0.68,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3308": [
    "GDA94 / NSW Lambert",
    "+proj=lcc +lat_1=-30.75 +lat_2=-35.75 +lat_0=-33.25 +lon_0=147 +x_0=9300000 +y_0=4500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3309": [
    "NAD27 / California Albers",
    "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3310": [
    "NAD83 / California Albers",
    "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3311": [
    "NAD83(HARN) / California Albers",
    "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3312": [
    "CSG67 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=intl +towgs84=-186,230,110,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3313": [
    "RGFG95 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=2,2,-2,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3314": [
    "Katanga 1955 / Katanga Lambert (deprecated)",
    "+proj=lcc +lat_1=-6.5 +lat_2=-11.5 +lat_0=0 +lon_0=26 +x_0=0 +y_0=0 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3315": [
    "Katanga 1955 / Katanga TM (deprecated)",
    "+proj=tmerc +lat_0=-9 +lon_0=26 +k=0.9998 +x_0=0 +y_0=0 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3316": [
    "Kasai 1953 / Congo TM zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=22 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3317": [
    "Kasai 1953 / Congo TM zone 24",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3318": [
    "IGC 1962 / Congo TM zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:32603": [
    "WGS 84 / UTM zone 3N",
    "+proj=utm +zone=3 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3319": [
    "IGC 1962 / Congo TM zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=14 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3320": [
    "IGC 1962 / Congo TM zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=16 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3321": [
    "IGC 1962 / Congo TM zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3322": [
    "IGC 1962 / Congo TM zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=20 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3323": [
    "IGC 1962 / Congo TM zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=22 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3324": [
    "IGC 1962 / Congo TM zone 24",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3325": [
    "IGC 1962 / Congo TM zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=26 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3326": [
    "IGC 1962 / Congo TM zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=28 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3327": [
    "IGC 1962 / Congo TM zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3372": [
    "NAD83 / UTM zone 59N",
    "+proj=utm +zone=59 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3328": [
    "Pulkovo 1942(58) / GUGiK-80",
    "+proj=sterea +lat_0=52.16666666666666 +lon_0=19.16666666666667 +k=0.999714 +x_0=500000 +y_0=500000 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3329": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3330": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3331": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3332": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3333": [
    "Pulkovo 1942(58) / Gauss-Kruger zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3334": [
    "Pulkovo 1942(58) / Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3335": [
    "Pulkovo 1942(58) / Gauss-Kruger zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3336": [
    "IGN 1962 Kerguelen / UTM zone 42S",
    "+proj=utm +zone=42 +south +ellps=intl +towgs84=145,-187,103,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3337": [
    "Le Pouce 1934 / Mauritius Grid",
    "+proj=lcc +lat_1=-20.19506944444445 +lat_0=-20.19506944444445 +lon_0=57.52182777777778 +k_0=1 +x_0=1000000 +y_0=1000000 +ellps=clrk80 +towgs84=-770.1,158.4,-498.2,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3338": [
    "NAD83 / Alaska Albers",
    "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3339": [
    "IGCB 1955 / Congo TM zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3340": [
    "IGCB 1955 / Congo TM zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=14 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3341": [
    "IGCB 1955 / Congo TM zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=16 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3342": [
    "IGCB 1955 / UTM zone 33S",
    "+proj=utm +zone=33 +south +ellps=clrk80 +towgs84=-79.9,-158,-168.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3343": [
    "Mauritania 1999 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3344": [
    "Mauritania 1999 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3345": [
    "Mauritania 1999 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3346": [
    "LKS94 / Lithuania TM",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3347": [
    "NAD83 / Statistics Canada Lambert",
    "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=63.390675 +lon_0=-91.86666666666666 +x_0=6200000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3348": [
    "NAD83(CSRS) / Statistics Canada Lambert",
    "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=63.390675 +lon_0=-91.86666666666666 +x_0=6200000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3349": [
    "WGS 84 / PDC Mercator (deprecated)",
    "+proj=merc +lon_0=-150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3350": [
    "Pulkovo 1942 / CS63 zone C0",
    "+proj=tmerc +lat_0=0.1 +lon_0=21.95 +k=1 +x_0=250000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3351": [
    "Pulkovo 1942 / CS63 zone C1",
    "+proj=tmerc +lat_0=0.1 +lon_0=24.95 +k=1 +x_0=1250000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3352": [
    "Pulkovo 1942 / CS63 zone C2",
    "+proj=tmerc +lat_0=0.1 +lon_0=27.95 +k=1 +x_0=2250000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3353": [
    "Mhast (onshore) / UTM zone 32S",
    "+proj=utm +zone=32 +south +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:3354": [
    "Mhast (offshore) / UTM zone 32S",
    "+proj=utm +zone=32 +south +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:3373": [
    "NAD83 / UTM zone 60N",
    "+proj=utm +zone=60 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3355": [
    "Egypt Gulf of Suez S-650 TL / Red Belt",
    "+proj=tmerc +lat_0=30 +lon_0=31 +k=1 +x_0=615000 +y_0=810000 +ellps=helmert +towgs84=-146.21,112.63,4.05,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3356": [
    "Grand Cayman 1959 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=clrk66 +towgs84=67.8,106.1,138.8,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3357": [
    "Little Cayman 1961 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=clrk66 +towgs84=42,124,147,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3358": [
    "NAD83(HARN) / North Carolina",
    "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3359": [
    "NAD83(HARN) / North Carolina (ftUS) (deprecated)",
    "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024385 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3360": [
    "NAD83(HARN) / South Carolina",
    "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3361": [
    "NAD83(HARN) / South Carolina (ft)",
    "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3362": [
    "NAD83(HARN) / Pennsylvania North",
    "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3374": [
    "FD54 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=intl +units=m +no_defs ",
  ],
  "EPSG:3363": [
    "NAD83(HARN) / Pennsylvania North (ftUS)",
    "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3364": [
    "NAD83(HARN) / Pennsylvania South",
    "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3365": [
    "NAD83(HARN) / Pennsylvania South (ftUS)",
    "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3366": [
    "Hong Kong 1963 Grid System (deprecated)",
    "+proj=cass +lat_0=22.31213333333334 +lon_0=114.1785555555556 +x_0=40243.57775604237 +y_0=19069.93351512578 +a=6378293.645208759 +b=6356617.987679838 +units=m +no_defs ",
  ],
  "EPSG:3367": [
    "IGN Astro 1960 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3368": [
    "IGN Astro 1960 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3369": [
    "IGN Astro 1960 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3370": [
    "NAD27 / UTM zone 59N",
    "+proj=utm +zone=59 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3371": [
    "NAD27 / UTM zone 60N",
    "+proj=utm +zone=60 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3375": [
    "GDM2000 / Peninsula RSO",
    "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257964666666 +k=0.99984 +x_0=804671 +y_0=0 +gamma=323.1301023611111 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3376": [
    "GDM2000 / East Malaysia BRSO",
    "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31580995 +k=0.99984 +x_0=0 +y_0=0 +gamma=53.13010236111111 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3377": [
    "GDM2000 / Johor Grid",
    "+proj=cass +lat_0=2.121679744444445 +lon_0=103.4279362361111 +x_0=-14810.562 +y_0=8758.32 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3378": [
    "GDM2000 / Sembilan and Melaka Grid",
    "+proj=cass +lat_0=2.682347636111111 +lon_0=101.9749050416667 +x_0=3673.785 +y_0=-4240.573 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3379": [
    "GDM2000 / PahangGrid",
    "+proj=cass +lat_0=3.769388088888889 +lon_0=102.3682989833333 +x_0=-7368.228 +y_0=6485.858 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3380": [
    "GDM2000 / Selangor Grid",
    "+proj=cass +lat_0=3.68464905 +lon_0=101.3891079138889 +x_0=-34836.161 +y_0=56464.049 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3381": [
    "GDM2000 / Terengganu Grid",
    "+proj=cass +lat_0=4.9762852 +lon_0=103.070275625 +x_0=19594.245 +y_0=3371.895 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3382": [
    "GDM2000 / Pinang Grid",
    "+proj=cass +lat_0=5.421517541666667 +lon_0=100.3443769638889 +x_0=-23.414 +y_0=62.283 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3383": [
    "GDM2000 / Kedah and Perlis Grid",
    "+proj=cass +lat_0=5.964672713888889 +lon_0=100.6363711111111 +x_0=0 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3384": [
    "GDM2000 / Perak Grid",
    "+proj=cass +lat_0=4.859063022222222 +lon_0=100.8154105861111 +x_0=-1.769 +y_0=133454.779 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3385": [
    "GDM2000 / Kelantan Grid",
    "+proj=cass +lat_0=5.972543658333334 +lon_0=102.2952416694444 +x_0=13227.851 +y_0=8739.894 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:3386": [
    "KKJ / Finland zone 0",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs ",
  ],
  "EPSG:3387": [
    "KKJ / Finland zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=5500000 +y_0=0 +ellps=intl +towgs84=-96.062,-82.428,-121.753,4.801,0.345,-1.376,1.496 +units=m +no_defs ",
  ],
  "EPSG:3388": [
    "Pulkovo 1942 / Caspian Sea Mercator",
    "+proj=merc +lon_0=51 +lat_ts=42 +x_0=0 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3389": [
    "Pulkovo 1942 / 3-degree Gauss-Kruger zone 60",
    "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3390": [
    "Pulkovo 1995 / 3-degree Gauss-Kruger zone 60",
    "+proj=tmerc +lat_0=0 +lon_0=180 +k=1 +x_0=60500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:3391": [
    "Karbala 1979 / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=clrk80 +towgs84=84.1,-320.1,218.7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3392": [
    "Karbala 1979 / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=clrk80 +towgs84=84.1,-320.1,218.7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3393": [
    "Karbala 1979 / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=clrk80 +towgs84=84.1,-320.1,218.7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26708": [
    "NAD27 / UTM zone 8N",
    "+proj=utm +zone=8 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3394": [
    "Nahrwan 1934 / Iraq zone",
    "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=45 +k_0=0.9987864078000001 +x_0=1500000 +y_0=1166200 +ellps=clrk80 +units=m +no_defs ",
  ],
  "EPSG:3395": [
    "WGS 84 / World Mercator",
    "+proj=merc +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3396": [
    "PD/83 / 3-degree Gauss-Kruger zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3397": [
    "PD/83 / 3-degree Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3398": [
    "RD/83 / 3-degree Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3399": [
    "RD/83 / 3-degree Gauss-Kruger zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:3400": [
    "NAD83 / Alberta 10-TM (Forest)",
    "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3401": [
    "NAD83 / Alberta 10-TM (Resource)",
    "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3402": [
    "NAD83(CSRS) / Alberta 10-TM (Forest)",
    "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3403": [
    "NAD83(CSRS) / Alberta 10-TM (Resource)",
    "+proj=tmerc +lat_0=0 +lon_0=-115 +k=0.9992 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3404": [
    "NAD83(HARN) / North Carolina (ftUS)",
    "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3405": [
    "VN-2000 / UTM zone 48N",
    "+proj=utm +zone=48 +ellps=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3406": [
    "VN-2000 / UTM zone 49N",
    "+proj=utm +zone=49 +ellps=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3407": [
    "Hong Kong 1963 Grid System",
    "+proj=cass +lat_0=22.31213333333334 +lon_0=114.1785555555556 +x_0=40243.57775604237 +y_0=19069.93351512578 +a=6378293.645208759 +b=6356617.987679838 +to_meter=0.3047972654 +no_defs ",
  ],
  "EPSG:3408": [
    "unnamed",
    "+proj=laea +lat_0=90 +lon_0=0 +x_0=0 +y_0=0 +a=6371228 +b=6371228 +units=m +no_defs ",
  ],
  "EPSG:3409": [
    "unnamed",
    "+proj=laea +lat_0=-90 +lon_0=0 +x_0=0 +y_0=0 +a=6371228 +b=6371228 +units=m +no_defs ",
  ],
  "EPSG:3410": [
    "NSIDC EASE-Grid Global",
    "+proj=cea +lon_0=0 +lat_ts=30 +x_0=0 +y_0=0 +a=6371228 +b=6371228 +units=m +no_defs ",
  ],
  "EPSG:3411": [
    "NSIDC Sea Ice Polar Stereographic North",
    "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs ",
  ],
  "EPSG:3412": [
    "NSIDC Sea Ice Polar Stereographic South",
    "+proj=stere +lat_0=-90 +lat_ts=-70 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6378273 +b=6356889.449 +units=m +no_defs ",
  ],
  "EPSG:3413": [
    "WGS 84 / NSIDC Sea Ice Polar Stereographic North",
    "+proj=stere +lat_0=90 +lat_ts=70 +lon_0=-45 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3414": [
    "SVY21 / Singapore TM",
    "+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3415": [
    "WGS 72BE / South China Sea Lambert",
    "+proj=lcc +lat_1=18 +lat_2=24 +lat_0=21 +lon_0=114 +x_0=500000 +y_0=500000 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:3416": [
    "ETRS89 / Austria Lambert",
    "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3417": [
    "NAD83 / Iowa North (ft US)",
    "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3418": [
    "NAD83 / Iowa South (ft US)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3419": [
    "NAD83 / Kansas North (ft US)",
    "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3420": [
    "NAD83 / Kansas South (ft US)",
    "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3421": [
    "NAD83 / Nevada East (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000.00001016 +y_0=8000000.000010163 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3422": [
    "NAD83 / Nevada Central (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000.00001016 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3423": [
    "NAD83 / Nevada West (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000.0000101599 +y_0=3999999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3424": [
    "NAD83 / New Jersey (ft US)",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3425": [
    "NAD83(HARN) / Iowa North (ft US)",
    "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3426": [
    "NAD83(HARN) / Iowa South (ft US)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3427": [
    "NAD83(HARN) / Kansas North (ft US)",
    "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3428": [
    "NAD83(HARN) / Kansas South (ft US)",
    "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3429": [
    "NAD83(HARN) / Nevada East (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000.00001016 +y_0=8000000.000010163 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3430": [
    "NAD83(HARN) / Nevada Central (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000.00001016 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3431": [
    "NAD83(HARN) / Nevada West (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000.0000101599 +y_0=3999999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3432": [
    "NAD83(HARN) / New Jersey (ft US)",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3433": [
    "NAD83 / Arkansas North (ftUS)",
    "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3434": [
    "NAD83 / Arkansas South (ftUS)",
    "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3435": [
    "NAD83 / Illinois East (ftUS)",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3436": [
    "NAD83 / Illinois West (ftUS)",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=699999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3437": [
    "NAD83 / New Hampshire (ftUS)",
    "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3438": [
    "NAD83 / Rhode Island (ftUS)",
    "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=99999.99998983997 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3439": [
    "PSD93 / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.7101 +units=m +no_defs ",
  ],
  "EPSG:3440": [
    "PSD93 / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=clrk80 +towgs84=-180.624,-225.516,173.919,-0.81,-1.898,8.336,16.7101 +units=m +no_defs ",
  ],
  "EPSG:3441": [
    "NAD83(HARN) / Arkansas North (ftUS)",
    "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3442": [
    "NAD83(HARN) / Arkansas South (ftUS)",
    "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3443": [
    "NAD83(HARN) / Illinois East (ftUS)",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3444": [
    "NAD83(HARN) / Illinois West (ftUS)",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=699999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3445": [
    "NAD83(HARN) / New Hampshire (ftUS)",
    "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:32604": [
    "WGS 84 / UTM zone 4N",
    "+proj=utm +zone=4 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3446": [
    "NAD83(HARN) / Rhode Island (ftUS)",
    "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=99999.99998983997 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3447": [
    "ETRS89 / Belgian Lambert 2005",
    "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=150328 +y_0=166262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3448": [
    "JAD2001 / Jamaica Metric Grid",
    "+proj=lcc +lat_1=18 +lat_0=18 +lon_0=-77 +k_0=1 +x_0=750000 +y_0=650000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3449": [
    "JAD2001 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3450": [
    "JAD2001 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3451": [
    "NAD83 / Louisiana North (ftUS)",
    "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3452": [
    "NAD83 / Louisiana South (ftUS)",
    "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3453": [
    "NAD83 / Louisiana Offshore (ftUS)",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3454": [
    "NAD83 / South Dakota North (ftUS) (deprecated)",
    "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3455": [
    "NAD83 / South Dakota South (ftUS)",
    "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3456": [
    "NAD83(HARN) / Louisiana North (ftUS)",
    "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3457": [
    "NAD83(HARN) / Louisiana South (ftUS)",
    "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3458": [
    "NAD83(HARN) / South Dakota North (ftUS)",
    "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3459": [
    "NAD83(HARN) / South Dakota South (ftUS)",
    "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3460": [
    "Fiji 1986 / Fiji Map Grid",
    "+proj=tmerc +lat_0=-17 +lon_0=178.75 +k=0.99985 +x_0=2000000 +y_0=4000000 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:3461": [
    "Dabola 1981 / UTM zone 28N",
    "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +towgs84=-83,37,124,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3462": [
    "Dabola 1981 / UTM zone 29N",
    "+proj=utm +zone=29 +a=6378249.2 +b=6356515 +towgs84=-83,37,124,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32605": [
    "WGS 84 / UTM zone 5N",
    "+proj=utm +zone=5 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3463": [
    "NAD83 / Maine CS2000 Central",
    "+proj=tmerc +lat_0=43.5 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3464": [
    "NAD83(HARN) / Maine CS2000 Central",
    "+proj=tmerc +lat_0=43.5 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3465": [
    "NAD83(NSRS2007) / Alabama East",
    "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3466": [
    "NAD83(NSRS2007) / Alabama West",
    "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3467": [
    "NAD83(NSRS2007) / Alaska Albers",
    "+proj=aea +lat_1=55 +lat_2=65 +lat_0=50 +lon_0=-154 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3468": [
    "NAD83(NSRS2007) / Alaska zone 1",
    "+proj=omerc +lat_0=57 +lonc=-133.6666666666667 +alpha=323.1301023611111 +k=0.9999 +x_0=5000000 +y_0=-5000000 +gamma=323.1301023611111 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3469": [
    "NAD83(NSRS2007) / Alaska zone 2",
    "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3470": [
    "NAD83(NSRS2007) / Alaska zone 3",
    "+proj=tmerc +lat_0=54 +lon_0=-146 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3471": [
    "NAD83(NSRS2007) / Alaska zone 4",
    "+proj=tmerc +lat_0=54 +lon_0=-150 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3472": [
    "NAD83(NSRS2007) / Alaska zone 5",
    "+proj=tmerc +lat_0=54 +lon_0=-154 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3473": [
    "NAD83(NSRS2007) / Alaska zone 6",
    "+proj=tmerc +lat_0=54 +lon_0=-158 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3474": [
    "NAD83(NSRS2007) / Alaska zone 7",
    "+proj=tmerc +lat_0=54 +lon_0=-162 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3475": [
    "NAD83(NSRS2007) / Alaska zone 8",
    "+proj=tmerc +lat_0=54 +lon_0=-166 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3476": [
    "NAD83(NSRS2007) / Alaska zone 9",
    "+proj=tmerc +lat_0=54 +lon_0=-170 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3477": [
    "NAD83(NSRS2007) / Alaska zone 10",
    "+proj=lcc +lat_1=53.83333333333334 +lat_2=51.83333333333334 +lat_0=51 +lon_0=-176 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3478": [
    "NAD83(NSRS2007) / Arizona Central",
    "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3479": [
    "NAD83(NSRS2007) / Arizona Central (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3480": [
    "NAD83(NSRS2007) / Arizona East",
    "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3481": [
    "NAD83(NSRS2007) / Arizona East (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3482": [
    "NAD83(NSRS2007) / Arizona West",
    "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3483": [
    "NAD83(NSRS2007) / Arizona West (ft)",
    "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3484": [
    "NAD83(NSRS2007) / Arkansas North",
    "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3485": [
    "NAD83(NSRS2007) / Arkansas North (ftUS)",
    "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3486": [
    "NAD83(NSRS2007) / Arkansas South",
    "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3487": [
    "NAD83(NSRS2007) / Arkansas South (ftUS)",
    "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3488": [
    "NAD83(NSRS2007) / California Albers",
    "+proj=aea +lat_1=34 +lat_2=40.5 +lat_0=0 +lon_0=-120 +x_0=0 +y_0=-4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3489": [
    "NAD83(NSRS2007) / California zone 1",
    "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3490": [
    "NAD83(NSRS2007) / California zone 1 (ftUS)",
    "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3491": [
    "NAD83(NSRS2007) / California zone 2",
    "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3492": [
    "NAD83(NSRS2007) / California zone 2 (ftUS)",
    "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3493": [
    "NAD83(NSRS2007) / California zone 3",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3494": [
    "NAD83(NSRS2007) / California zone 3 (ftUS)",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3495": [
    "NAD83(NSRS2007) / California zone 4",
    "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3496": [
    "NAD83(NSRS2007) / California zone 4 (ftUS)",
    "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3497": [
    "NAD83(NSRS2007) / California zone 5",
    "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3498": [
    "NAD83(NSRS2007) / California zone 5 (ftUS)",
    "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3499": [
    "NAD83(NSRS2007) / California zone 6",
    "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3500": [
    "NAD83(NSRS2007) / California zone 6 (ftUS)",
    "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000.0001016 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3501": [
    "NAD83(NSRS2007) / Colorado Central",
    "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3502": [
    "NAD83(NSRS2007) / Colorado Central (ftUS)",
    "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3503": [
    "NAD83(NSRS2007) / Colorado North",
    "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3504": [
    "NAD83(NSRS2007) / Colorado North (ftUS)",
    "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3505": [
    "NAD83(NSRS2007) / Colorado South",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3506": [
    "NAD83(NSRS2007) / Colorado South (ftUS)",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8288036576 +y_0=304800.6096012192 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3507": [
    "NAD83(NSRS2007) / Connecticut",
    "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096 +y_0=152400.3048 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3508": [
    "NAD83(NSRS2007) / Connecticut (ftUS)",
    "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096012192 +y_0=152400.3048006096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3509": [
    "NAD83(NSRS2007) / Delaware",
    "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3510": [
    "NAD83(NSRS2007) / Delaware (ftUS)",
    "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3511": [
    "NAD83(NSRS2007) / Florida East",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3512": [
    "NAD83(NSRS2007) / Florida East (ftUS)",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3513": [
    "NAD83(NSRS2007) / Florida GDL Albers",
    "+proj=aea +lat_1=24 +lat_2=31.5 +lat_0=24 +lon_0=-84 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3514": [
    "NAD83(NSRS2007) / Florida North",
    "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3515": [
    "NAD83(NSRS2007) / Florida North (ftUS)",
    "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3516": [
    "NAD83(NSRS2007) / Florida West",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3517": [
    "NAD83(NSRS2007) / Florida West (ftUS)",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3518": [
    "NAD83(NSRS2007) / Georgia East",
    "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3519": [
    "NAD83(NSRS2007) / Georgia East (ftUS)",
    "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3520": [
    "NAD83(NSRS2007) / Georgia West",
    "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3521": [
    "NAD83(NSRS2007) / Georgia West (ftUS)",
    "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3522": [
    "NAD83(NSRS2007) / Idaho Central",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3523": [
    "NAD83(NSRS2007) / Idaho Central (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3524": [
    "NAD83(NSRS2007) / Idaho East",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3525": [
    "NAD83(NSRS2007) / Idaho East (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000.0001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3526": [
    "NAD83(NSRS2007) / Idaho West",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3527": [
    "NAD83(NSRS2007) / Idaho West (ftUS)",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3528": [
    "NAD83(NSRS2007) / Illinois East",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3529": [
    "NAD83(NSRS2007) / Illinois East (ftUS)",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3890": [
    "IGRS / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3530": [
    "NAD83(NSRS2007) / Illinois West",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3531": [
    "NAD83(NSRS2007) / Illinois West (ftUS)",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=699999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3532": [
    "NAD83(NSRS2007) / Indiana East",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=100000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3533": [
    "NAD83(NSRS2007) / Indiana East (ftUS)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=99999.99989839978 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3534": [
    "NAD83(NSRS2007) / Indiana West",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3535": [
    "NAD83(NSRS2007) / Indiana West (ftUS)",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=249999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3536": [
    "NAD83(NSRS2007) / Iowa North",
    "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3537": [
    "NAD83(NSRS2007) / Iowa North (ft US)",
    "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3538": [
    "NAD83(NSRS2007) / Iowa South",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3539": [
    "NAD83(NSRS2007) / Iowa South (ft US)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3540": [
    "NAD83(NSRS2007) / Kansas North",
    "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3541": [
    "NAD83(NSRS2007) / Kansas North (ft US)",
    "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=399999.99998984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3542": [
    "NAD83(NSRS2007) / Kansas South",
    "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3543": [
    "NAD83(NSRS2007) / Kansas South (ft US)",
    "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=399999.99998984 +y_0=399999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3544": [
    "NAD83(NSRS2007) / Kentucky North",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3545": [
    "NAD83(NSRS2007) / Kentucky North (ftUS)",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3546": [
    "NAD83(NSRS2007) / Kentucky Single Zone",
    "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3547": [
    "NAD83(NSRS2007) / Kentucky Single Zone (ftUS)",
    "+proj=lcc +lat_1=37.08333333333334 +lat_2=38.66666666666666 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=1500000 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3548": [
    "NAD83(NSRS2007) / Kentucky South",
    "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3549": [
    "NAD83(NSRS2007) / Kentucky South (ftUS)",
    "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000.0001016001 +y_0=500000.0001016001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3550": [
    "NAD83(NSRS2007) / Louisiana North",
    "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3551": [
    "NAD83(NSRS2007) / Louisiana North (ftUS)",
    "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3552": [
    "NAD83(NSRS2007) / Louisiana South",
    "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3553": [
    "NAD83(NSRS2007) / Louisiana South (ftUS)",
    "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=999999.9999898402 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3554": [
    "NAD83(NSRS2007) / Maine CS2000 Central",
    "+proj=tmerc +lat_0=43.5 +lon_0=-69.125 +k=0.99998 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3555": [
    "NAD83(NSRS2007) / Maine CS2000 East",
    "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-67.875 +k=0.99998 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3556": [
    "NAD83(NSRS2007) / Maine CS2000 West",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.375 +k=0.99998 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3557": [
    "NAD83(NSRS2007) / Maine East",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3558": [
    "NAD83(NSRS2007) / Maine West",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3559": [
    "NAD83(NSRS2007) / Maryland",
    "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3560": [
    "NAD83 / Utah North (ftUS)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3561": [
    "Old Hawaiian / Hawaii zone 1",
    "+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3580": [
    "NAD83 / NWT Lambert",
    "+proj=lcc +lat_1=62 +lat_2=70 +lat_0=0 +lon_0=-112 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3562": [
    "Old Hawaiian / Hawaii zone 2",
    "+proj=tmerc +lat_0=20.33333333333333 +lon_0=-156.6666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3563": [
    "Old Hawaiian / Hawaii zone 3",
    "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3564": [
    "Old Hawaiian / Hawaii zone 4",
    "+proj=tmerc +lat_0=21.83333333333333 +lon_0=-159.5 +k=0.99999 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3565": [
    "Old Hawaiian / Hawaii zone 5",
    "+proj=tmerc +lat_0=21.66666666666667 +lon_0=-160.1666666666667 +k=1 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=61,-285,-181,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3566": [
    "NAD83 / Utah Central (ftUS)",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=2000000.00001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3567": [
    "NAD83 / Utah South (ftUS)",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.00001016 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3568": [
    "NAD83(HARN) / Utah North (ftUS)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3569": [
    "NAD83(HARN) / Utah Central (ftUS)",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=2000000.00001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3570": [
    "NAD83(HARN) / Utah South (ftUS)",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.00001016 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3571": [
    "WGS 84 / North Pole LAEA Bering Sea",
    "+proj=laea +lat_0=90 +lon_0=180 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3572": [
    "WGS 84 / North Pole LAEA Alaska",
    "+proj=laea +lat_0=90 +lon_0=-150 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3573": [
    "WGS 84 / North Pole LAEA Canada",
    "+proj=laea +lat_0=90 +lon_0=-100 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3574": [
    "WGS 84 / North Pole LAEA Atlantic",
    "+proj=laea +lat_0=90 +lon_0=-40 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3575": [
    "WGS 84 / North Pole LAEA Europe",
    "+proj=laea +lat_0=90 +lon_0=10 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3576": [
    "WGS 84 / North Pole LAEA Russia",
    "+proj=laea +lat_0=90 +lon_0=90 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3577": [
    "GDA94 / Australian Albers",
    "+proj=aea +lat_1=-18 +lat_2=-36 +lat_0=0 +lon_0=132 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3578": [
    "NAD83 / Yukon Albers",
    "+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3579": [
    "NAD83(CSRS) / Yukon Albers",
    "+proj=aea +lat_1=61.66666666666666 +lat_2=68 +lat_0=59 +lon_0=-132.5 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3581": [
    "NAD83(CSRS) / NWT Lambert",
    "+proj=lcc +lat_1=62 +lat_2=70 +lat_0=0 +lon_0=-112 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3582": [
    "NAD83(NSRS2007) / Maryland (ftUS)",
    "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=399999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3583": [
    "NAD83(NSRS2007) / Massachusetts Island",
    "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3584": [
    "NAD83(NSRS2007) / Massachusetts Island (ftUS)",
    "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3585": [
    "NAD83(NSRS2007) / Massachusetts Mainland",
    "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3586": [
    "NAD83(NSRS2007) / Massachusetts Mainland (ftUS)",
    "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000.0001016002 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3587": [
    "NAD83(NSRS2007) / Michigan Central",
    "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=6000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3588": [
    "NAD83(NSRS2007) / Michigan Central (ft)",
    "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=5999999.999976001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3589": [
    "NAD83(NSRS2007) / Michigan North",
    "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=8000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3590": [
    "NAD83(NSRS2007) / Michigan North (ft)",
    "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=7999999.999968001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3591": [
    "NAD83(NSRS2007) / Michigan Oblique Mercator",
    "+proj=omerc +lat_0=45.30916666666666 +lonc=-86 +alpha=337.25556 +k=0.9996 +x_0=2546731.496 +y_0=-4354009.816 +gamma=337.25556 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3592": [
    "NAD83(NSRS2007) / Michigan South",
    "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=4000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3593": [
    "NAD83(NSRS2007) / Michigan South (ft)",
    "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=3999999.999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3594": [
    "NAD83(NSRS2007) / Minnesota Central",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3595": [
    "NAD83(NSRS2007) / Minnesota North",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3596": [
    "NAD83(NSRS2007) / Minnesota South",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3597": [
    "NAD83(NSRS2007) / Mississippi East",
    "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3598": [
    "NAD83(NSRS2007) / Mississippi East (ftUS)",
    "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3599": [
    "NAD83(NSRS2007) / Mississippi West",
    "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3600": [
    "NAD83(NSRS2007) / Mississippi West (ftUS)",
    "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=699999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3601": [
    "NAD83(NSRS2007) / Missouri Central",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3602": [
    "NAD83(NSRS2007) / Missouri East",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3603": [
    "NAD83(NSRS2007) / Missouri West",
    "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=850000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3604": [
    "NAD83(NSRS2007) / Montana",
    "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3605": [
    "NAD83(NSRS2007) / Montana (ft)",
    "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3606": [
    "NAD83(NSRS2007) / Nebraska",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3607": [
    "NAD83(NSRS2007) / Nevada Central",
    "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3608": [
    "NAD83(NSRS2007) / Nevada Central (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000.00001016 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3609": [
    "NAD83(NSRS2007) / Nevada East",
    "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000 +y_0=8000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3610": [
    "NAD83(NSRS2007) / Nevada East (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000.00001016 +y_0=8000000.000010163 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3611": [
    "NAD83(NSRS2007) / Nevada West",
    "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3612": [
    "NAD83(NSRS2007) / Nevada West (ft US)",
    "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000.0000101599 +y_0=3999999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3613": [
    "NAD83(NSRS2007) / New Hampshire",
    "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3712": [
    "NAD83(NSRS2007) / UTM zone 5N",
    "+proj=utm +zone=5 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3614": [
    "NAD83(NSRS2007) / New Hampshire (ftUS)",
    "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3615": [
    "NAD83(NSRS2007) / New Jersey",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3616": [
    "NAD83(NSRS2007) / New Jersey (ft US)",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3617": [
    "NAD83(NSRS2007) / New Mexico Central",
    "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3618": [
    "NAD83(NSRS2007) / New Mexico Central (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3619": [
    "NAD83(NSRS2007) / New Mexico East",
    "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3620": [
    "NAD83(NSRS2007) / New Mexico East (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3621": [
    "NAD83(NSRS2007) / New Mexico West",
    "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3622": [
    "NAD83(NSRS2007) / New Mexico West (ftUS)",
    "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3623": [
    "NAD83(NSRS2007) / New York Central",
    "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3624": [
    "NAD83(NSRS2007) / New York Central (ftUS)",
    "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3625": [
    "NAD83(NSRS2007) / New York East",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3626": [
    "NAD83(NSRS2007) / New York East (ftUS)",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3627": [
    "NAD83(NSRS2007) / New York Long Island",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3628": [
    "NAD83(NSRS2007) / New York Long Island (ftUS)",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3629": [
    "NAD83(NSRS2007) / New York West",
    "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3630": [
    "NAD83(NSRS2007) / New York West (ftUS)",
    "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:4572": [
    "New Beijing / Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:3631": [
    "NAD83(NSRS2007) / North Carolina",
    "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3632": [
    "NAD83(NSRS2007) / North Carolina (ftUS)",
    "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3633": [
    "NAD83(NSRS2007) / North Dakota North",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3634": [
    "NAD83(NSRS2007) / North Dakota North (ft)",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3635": [
    "NAD83(NSRS2007) / North Dakota South",
    "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3636": [
    "NAD83(NSRS2007) / North Dakota South (ft)",
    "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=599999.9999976 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3637": [
    "NAD83(NSRS2007) / Ohio North",
    "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3638": [
    "NAD83(NSRS2007) / Ohio South",
    "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3639": [
    "NAD83(NSRS2007) / Oklahoma North",
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3640": [
    "NAD83(NSRS2007) / Oklahoma North (ftUS)",
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3641": [
    "NAD83(NSRS2007) / Oklahoma South",
    "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3642": [
    "NAD83(NSRS2007) / Oklahoma South (ftUS)",
    "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3643": [
    "NAD83(NSRS2007) / Oregon Lambert",
    "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3644": [
    "NAD83(NSRS2007) / Oregon Lambert (ft)",
    "+proj=lcc +lat_1=43 +lat_2=45.5 +lat_0=41.75 +lon_0=-120.5 +x_0=399999.9999984 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3645": [
    "NAD83(NSRS2007) / Oregon North",
    "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3646": [
    "NAD83(NSRS2007) / Oregon North (ft)",
    "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000.0001424 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3647": [
    "NAD83(NSRS2007) / Oregon South",
    "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3648": [
    "NAD83(NSRS2007) / Oregon South (ft)",
    "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000.0001464 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3649": [
    "NAD83(NSRS2007) / Pennsylvania North",
    "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3650": [
    "NAD83(NSRS2007) / Pennsylvania North (ftUS)",
    "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3651": [
    "NAD83(NSRS2007) / Pennsylvania South",
    "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3652": [
    "NAD83(NSRS2007) / Pennsylvania South (ftUS)",
    "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3653": [
    "NAD83(NSRS2007) / Rhode Island",
    "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3654": [
    "NAD83(NSRS2007) / Rhode Island (ftUS)",
    "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=99999.99998983997 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3655": [
    "NAD83(NSRS2007) / South Carolina",
    "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3656": [
    "NAD83(NSRS2007) / South Carolina (ft)",
    "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3657": [
    "NAD83(NSRS2007) / South Dakota North",
    "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3658": [
    "NAD83(NSRS2007) / South Dakota North (ftUS)",
    "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3659": [
    "NAD83(NSRS2007) / South Dakota South",
    "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3660": [
    "NAD83(NSRS2007) / South Dakota South (ftUS)",
    "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3661": [
    "NAD83(NSRS2007) / Tennessee",
    "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3662": [
    "NAD83(NSRS2007) / Tennessee (ftUS)",
    "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3663": [
    "NAD83(NSRS2007) / Texas Central",
    "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=700000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3664": [
    "NAD83(NSRS2007) / Texas Central (ftUS)",
    "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=699999.9998983998 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3665": [
    "NAD83(NSRS2007) / Texas Centric Albers Equal Area",
    "+proj=aea +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3666": [
    "NAD83(NSRS2007) / Texas Centric Lambert Conformal",
    "+proj=lcc +lat_1=27.5 +lat_2=35 +lat_0=18 +lon_0=-100 +x_0=1500000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3667": [
    "NAD83(NSRS2007) / Texas North",
    "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3668": [
    "NAD83(NSRS2007) / Texas North (ftUS)",
    "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000.0001016002 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3669": [
    "NAD83(NSRS2007) / Texas North Central",
    "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3670": [
    "NAD83(NSRS2007) / Texas North Central (ftUS)",
    "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3671": [
    "NAD83(NSRS2007) / Texas South",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3672": [
    "NAD83(NSRS2007) / Texas South (ftUS)",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000.0000000001 +y_0=5000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3673": [
    "NAD83(NSRS2007) / Texas South Central",
    "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3674": [
    "NAD83(NSRS2007) / Texas South Central (ftUS)",
    "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=3999999.9998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3675": [
    "NAD83(NSRS2007) / Utah Central",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3676": [
    "NAD83(NSRS2007) / Utah Central (ft)",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=1999999.999992 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3677": [
    "NAD83(NSRS2007) / Utah Central (ftUS)",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=2000000.00001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3678": [
    "NAD83(NSRS2007) / Utah North",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3679": [
    "NAD83(NSRS2007) / Utah North (ft)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.0001504 +y_0=999999.9999960001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3680": [
    "NAD83(NSRS2007) / Utah North (ftUS)",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000.00001016 +y_0=999999.9999898402 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3681": [
    "NAD83(NSRS2007) / Utah South",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3682": [
    "NAD83(NSRS2007) / Utah South (ft)",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.0001504 +y_0=2999999.999988 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=ft +no_defs ",
  ],
  "EPSG:3683": [
    "NAD83(NSRS2007) / Utah South (ftUS)",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000.00001016 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3684": [
    "NAD83(NSRS2007) / Vermont",
    "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3685": [
    "NAD83(NSRS2007) / Virginia North",
    "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3686": [
    "NAD83(NSRS2007) / Virginia North (ftUS)",
    "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=2000000.0001016 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3687": [
    "NAD83(NSRS2007) / Virginia South",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3688": [
    "NAD83(NSRS2007) / Virginia South (ftUS)",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000.0001016 +y_0=999999.9998983998 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3689": [
    "NAD83(NSRS2007) / Washington North",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3690": [
    "NAD83(NSRS2007) / Washington North (ftUS)",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3691": [
    "NAD83(NSRS2007) / Washington South",
    "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3692": [
    "NAD83(NSRS2007) / Washington South (ftUS)",
    "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000.0001016001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3693": [
    "NAD83(NSRS2007) / West Virginia North",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3694": [
    "NAD83(NSRS2007) / West Virginia South",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3695": [
    "NAD83(NSRS2007) / Wisconsin Central",
    "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3696": [
    "NAD83(NSRS2007) / Wisconsin Central (ftUS)",
    "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3697": [
    "NAD83(NSRS2007) / Wisconsin North",
    "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3698": [
    "NAD83(NSRS2007) / Wisconsin North (ftUS)",
    "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3699": [
    "NAD83(NSRS2007) / Wisconsin South",
    "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3700": [
    "NAD83(NSRS2007) / Wisconsin South (ftUS)",
    "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3701": [
    "NAD83(NSRS2007) / Wisconsin Transverse Mercator",
    "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9996 +x_0=520000 +y_0=-4480000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3702": [
    "NAD83(NSRS2007) / Wyoming East",
    "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3703": [
    "NAD83(NSRS2007) / Wyoming East Central",
    "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=400000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3704": [
    "NAD83(NSRS2007) / Wyoming West Central",
    "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3705": [
    "NAD83(NSRS2007) / Wyoming West",
    "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3706": [
    "NAD83(NSRS2007) / UTM zone 59N",
    "+proj=utm +zone=59 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3707": [
    "NAD83(NSRS2007) / UTM zone 60N",
    "+proj=utm +zone=60 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3708": [
    "NAD83(NSRS2007) / UTM zone 1N",
    "+proj=utm +zone=1 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3709": [
    "NAD83(NSRS2007) / UTM zone 2N",
    "+proj=utm +zone=2 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3710": [
    "NAD83(NSRS2007) / UTM zone 3N",
    "+proj=utm +zone=3 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3711": [
    "NAD83(NSRS2007) / UTM zone 4N",
    "+proj=utm +zone=4 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32606": [
    "WGS 84 / UTM zone 6N",
    "+proj=utm +zone=6 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3713": [
    "NAD83(NSRS2007) / UTM zone 6N",
    "+proj=utm +zone=6 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3714": [
    "NAD83(NSRS2007) / UTM zone 7N",
    "+proj=utm +zone=7 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3715": [
    "NAD83(NSRS2007) / UTM zone 8N",
    "+proj=utm +zone=8 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3716": [
    "NAD83(NSRS2007) / UTM zone 9N",
    "+proj=utm +zone=9 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3717": [
    "NAD83(NSRS2007) / UTM zone 10N",
    "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3718": [
    "NAD83(NSRS2007) / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3719": [
    "NAD83(NSRS2007) / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3720": [
    "NAD83(NSRS2007) / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3721": [
    "NAD83(NSRS2007) / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3722": [
    "NAD83(NSRS2007) / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3723": [
    "NAD83(NSRS2007) / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3724": [
    "NAD83(NSRS2007) / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3725": [
    "NAD83(NSRS2007) / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3726": [
    "NAD83(NSRS2007) / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3727": [
    "Reunion 1947 / TM Reunion",
    "+proj=tmerc +lat_0=-21.11666666666667 +lon_0=55.53333333333333 +k=1 +x_0=160000 +y_0=50000 +ellps=intl +towgs84=94,-948,-1262,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3728": [
    "NAD83(NSRS2007) / Ohio North (ftUS)",
    "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3729": [
    "NAD83(NSRS2007) / Ohio South (ftUS)",
    "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3730": [
    "NAD83(NSRS2007) / Wyoming East (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3731": [
    "NAD83(NSRS2007) / Wyoming East Central (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=399999.99998984 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3732": [
    "NAD83(NSRS2007) / Wyoming West Central (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3733": [
    "NAD83(NSRS2007) / Wyoming West (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3734": [
    "NAD83 / Ohio North (ftUS)",
    "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3735": [
    "NAD83 / Ohio South (ftUS)",
    "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3736": [
    "NAD83 / Wyoming East (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3737": [
    "NAD83 / Wyoming East Central (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=399999.99998984 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3738": [
    "NAD83 / Wyoming West Central (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3739": [
    "NAD83 / Wyoming West (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3740": [
    "NAD83(HARN) / UTM zone 10N",
    "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3741": [
    "NAD83(HARN) / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3742": [
    "NAD83(HARN) / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3743": [
    "NAD83(HARN) / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3744": [
    "NAD83(HARN) / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3745": [
    "NAD83(HARN) / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3746": [
    "NAD83(HARN) / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3747": [
    "NAD83(HARN) / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3748": [
    "NAD83(HARN) / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3749": [
    "NAD83(HARN) / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3750": [
    "NAD83(HARN) / UTM zone 4N",
    "+proj=utm +zone=4 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3751": [
    "NAD83(HARN) / UTM zone 5N",
    "+proj=utm +zone=5 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3752": [
    "WGS 84 / Mercator 41 (deprecated)",
    "+proj=merc +lon_0=100 +lat_ts=-41 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3753": [
    "NAD83(HARN) / Ohio North (ftUS)",
    "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3754": [
    "NAD83(HARN) / Ohio South (ftUS)",
    "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3755": [
    "NAD83(HARN) / Wyoming East (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3756": [
    "NAD83(HARN) / Wyoming East Central (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=399999.99998984 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3757": [
    "NAD83(HARN) / Wyoming West Central (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3758": [
    "NAD83(HARN) / Wyoming West (ftUS)",
    "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3759": [
    "NAD83 / Hawaii zone 3 (ftUS)",
    "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3760": [
    "NAD83(HARN) / Hawaii zone 3 (ftUS)",
    "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3761": [
    "NAD83(CSRS) / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3762": [
    "WGS 84 / South Georgia Lambert",
    "+proj=lcc +lat_1=-54 +lat_2=-54.75 +lat_0=-55 +lon_0=-37 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3763": [
    "ETRS89 / Portugal TM06",
    "+proj=tmerc +lat_0=39.66825833333333 +lon_0=-8.133108333333334 +k=1 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3764": [
    "NZGD2000 / Chatham Island Circuit 2000",
    "+proj=tmerc +lat_0=-44 +lon_0=-176.5 +k=1 +x_0=400000 +y_0=800000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3765": [
    "HTRS96 / Croatia TM",
    "+proj=tmerc +lat_0=0 +lon_0=16.5 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3766": [
    "HTRS96 / Croatia LCC",
    "+proj=lcc +lat_1=45.91666666666666 +lat_2=43.08333333333334 +lat_0=0 +lon_0=16.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3767": [
    "HTRS96 / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3768": [
    "HTRS96 / UTM zone 34N",
    "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3769": [
    "Bermuda 1957 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=clrk66 +towgs84=-73,213,296,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3770": [
    "BDA2000 / Bermuda 2000 National Grid",
    "+proj=tmerc +lat_0=32 +lon_0=-64.75 +k=1 +x_0=550000 +y_0=100000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3771": [
    "NAD27 / Alberta 3TM ref merid 111 W",
    "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3772": [
    "NAD27 / Alberta 3TM ref merid 114 W",
    "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3773": [
    "NAD27 / Alberta 3TM ref merid 117 W",
    "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3774": [
    "NAD27 / Alberta 3TM ref merid 120 W (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3775": [
    "NAD83 / Alberta 3TM ref merid 111 W",
    "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3776": [
    "NAD83 / Alberta 3TM ref merid 114 W",
    "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3777": [
    "NAD83 / Alberta 3TM ref merid 117 W",
    "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3778": [
    "NAD83 / Alberta 3TM ref merid 120 W (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3779": [
    "NAD83(CSRS) / Alberta 3TM ref merid 111 W",
    "+proj=tmerc +lat_0=0 +lon_0=-111 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3780": [
    "NAD83(CSRS) / Alberta 3TM ref merid 114 W",
    "+proj=tmerc +lat_0=0 +lon_0=-114 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3781": [
    "NAD83(CSRS) / Alberta 3TM ref merid 117 W",
    "+proj=tmerc +lat_0=0 +lon_0=-117 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3782": [
    "NAD83(CSRS) / Alberta 3TM ref merid 120 W (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3783": [
    "Pitcairn 2006 / Pitcairn TM 2006",
    "+proj=tmerc +lat_0=-25.06855261111111 +lon_0=-130.1129671111111 +k=1 +x_0=14200 +y_0=15500 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3784": [
    "Pitcairn 1967 / UTM zone 9S",
    "+proj=utm +zone=9 +south +ellps=intl +towgs84=185,165,42,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3785": [
    "Popular Visualisation CRS / Mercator (deprecated)",
    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
  ],
  "EPSG:3786": [
    "World Equidistant Cylindrical (Sphere) (deprecated)",
    "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +a=6371007 +b=6371007 +units=m +no_defs ",
  ],
  "EPSG:3787": [
    "MGI / Slovene National Grid (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:3788": [
    "NZGD2000 / Auckland Islands TM 2000",
    "+proj=tmerc +lat_0=0 +lon_0=166 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3789": [
    "NZGD2000 / Campbell Island TM 2000",
    "+proj=tmerc +lat_0=0 +lon_0=169 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3790": [
    "NZGD2000 / Antipodes Islands TM 2000",
    "+proj=tmerc +lat_0=0 +lon_0=179 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3791": [
    "NZGD2000 / Raoul Island TM 2000",
    "+proj=tmerc +lat_0=0 +lon_0=-178 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3793": [
    "NZGD2000 / Chatham Islands TM 2000",
    "+proj=tmerc +lat_0=0 +lon_0=-176.5 +k=1 +x_0=3500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3794": [
    "Slovenia 1996 / Slovene National Grid",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3795": [
    "NAD27 / Cuba Norte",
    "+proj=lcc +lat_1=23 +lat_2=21.7 +lat_0=22.35 +lon_0=-81 +x_0=500000 +y_0=280296.016 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3796": [
    "NAD27 / Cuba Sur",
    "+proj=lcc +lat_1=21.3 +lat_2=20.13333333333333 +lat_0=20.71666666666667 +lon_0=-76.83333333333333 +x_0=500000 +y_0=229126.939 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3797": [
    "NAD27 / MTQ Lambert",
    "+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3798": [
    "NAD83 / MTQ Lambert",
    "+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3799": [
    "NAD83(CSRS) / MTQ Lambert",
    "+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3800": [
    "NAD27 / Alberta 3TM ref merid 120 W",
    "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:3801": [
    "NAD83 / Alberta 3TM ref merid 120 W",
    "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3802": [
    "NAD83(CSRS) / Alberta 3TM ref merid 120 W",
    "+proj=tmerc +lat_0=0 +lon_0=-120 +k=0.9999 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3812": [
    "ETRS89 / Belgian Lambert 2008",
    "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=50.797815 +lon_0=4.359215833333333 +x_0=649328 +y_0=665262 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3814": [
    "NAD83 / Mississippi TM",
    "+proj=tmerc +lat_0=32.5 +lon_0=-89.75 +k=0.9998335 +x_0=500000 +y_0=1300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3815": [
    "NAD83(HARN) / Mississippi TM",
    "+proj=tmerc +lat_0=32.5 +lon_0=-89.75 +k=0.9998335 +x_0=500000 +y_0=1300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3816": [
    "NAD83(NSRS2007) / Mississippi TM",
    "+proj=tmerc +lat_0=32.5 +lon_0=-89.75 +k=0.9998335 +x_0=500000 +y_0=1300000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3825": [
    "TWD97 / TM2 zone 119",
    "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3826": [
    "TWD97 / TM2 zone 121",
    "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3827": [
    "TWD67 / TM2 zone 119",
    "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA +units=m +no_defs ",
  ],
  "EPSG:3828": [
    "TWD67 / TM2 zone 121",
    "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.9999 +x_0=250000 +y_0=0 +ellps=aust_SA +units=m +no_defs ",
  ],
  "EPSG:3829": [
    "Hu Tzu Shan / UTM zone 51N",
    "+proj=utm +zone=51 +ellps=intl +towgs84=-637,-549,-203,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3832": [
    "WGS 84 / PDC Mercator",
    "+proj=merc +lon_0=150 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3833": [
    "Pulkovo 1942(58) / Gauss-Kruger zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3834": [
    "Pulkovo 1942(83) / Gauss-Kruger zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3835": [
    "Pulkovo 1942(83) / Gauss-Kruger zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3836": [
    "Pulkovo 1942(83) / Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3837": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3838": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3839": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3840": [
    "Pulkovo 1942(58) / 3-degree Gauss-Kruger zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=30 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=33.4,-146.6,-76.3,-0.359,-0.053,0.844,-0.84 +units=m +no_defs ",
  ],
  "EPSG:3841": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3842": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 7 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3843": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 8 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3844": [
    "Pulkovo 1942(58) / Stereo70",
    "+proj=sterea +lat_0=46 +lon_0=25 +k=0.99975 +x_0=500000 +y_0=500000 +ellps=krass +towgs84=2.329,-147.042,-92.08,0.309,-0.325,-0.497,5.69 +units=m +no_defs ",
  ],
  "EPSG:3845": [
    "SWEREF99 / RT90 7.5 gon V emulation",
    "+proj=tmerc +lat_0=0 +lon_0=11.30625 +k=1.000006 +x_0=1500025.141 +y_0=-667.282 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3846": [
    "SWEREF99 / RT90 5 gon V emulation",
    "+proj=tmerc +lat_0=0 +lon_0=13.55626666666667 +k=1.0000058 +x_0=1500044.695 +y_0=-667.13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3847": [
    "SWEREF99 / RT90 2.5 gon V emulation",
    "+proj=tmerc +lat_0=0 +lon_0=15.80628452944445 +k=1.00000561024 +x_0=1500064.274 +y_0=-667.711 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3848": [
    "SWEREF99 / RT90 0 gon emulation",
    "+proj=tmerc +lat_0=0 +lon_0=18.0563 +k=1.0000054 +x_0=1500083.521 +y_0=-668.8440000000001 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3849": [
    "SWEREF99 / RT90 2.5 gon O emulation",
    "+proj=tmerc +lat_0=0 +lon_0=20.30631666666667 +k=1.0000052 +x_0=1500102.765 +y_0=-670.706 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3850": [
    "SWEREF99 / RT90 5 gon O emulation",
    "+proj=tmerc +lat_0=0 +lon_0=22.55633333333333 +k=1.0000049 +x_0=1500121.846 +y_0=-672.557 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3851": [
    "NZGD2000 / NZCS2000",
    "+proj=lcc +lat_1=-37.5 +lat_2=-44.5 +lat_0=-41 +lon_0=173 +x_0=3000000 +y_0=7000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3852": [
    "RSRGD2000 / DGLC2000",
    "+proj=lcc +lat_1=-76.66666666666667 +lat_2=-79.33333333333333 +lat_0=-90 +lon_0=157 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3854": [
    "County ST74",
    "+proj=tmerc +lat_0=0 +lon_0=18.05787 +k=0.99999506 +x_0=100182.7406 +y_0=-6500620.1207 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3857": [
    "WGS 84 / Pseudo-Mercator",
    "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
  ],
  "EPSG:3891": [
    "IGRS / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3892": [
    "IGRS / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3893": [
    "ED50 / Iraq National Grid",
    "+proj=tmerc +lat_0=29.02626833333333 +lon_0=46.5 +k=0.9994 +x_0=800000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3907": [
    "MGI 1901 / Balkans zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3908": [
    "MGI 1901 / Balkans zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=6500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3909": [
    "MGI 1901 / Balkans zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=7500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3910": [
    "MGI 1901 / Balkans zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=8500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3911": [
    "MGI 1901 / Slovenia Grid",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3912": [
    "MGI 1901 / Slovene National Grid",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=500000 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3920": [
    "Puerto Rico / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3942": [
    "RGF93 / CC42",
    "+proj=lcc +lat_1=41.25 +lat_2=42.75 +lat_0=42 +lon_0=3 +x_0=1700000 +y_0=1200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3943": [
    "RGF93 / CC43",
    "+proj=lcc +lat_1=42.25 +lat_2=43.75 +lat_0=43 +lon_0=3 +x_0=1700000 +y_0=2200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3944": [
    "RGF93 / CC44",
    "+proj=lcc +lat_1=43.25 +lat_2=44.75 +lat_0=44 +lon_0=3 +x_0=1700000 +y_0=3200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3945": [
    "RGF93 / CC45",
    "+proj=lcc +lat_1=44.25 +lat_2=45.75 +lat_0=45 +lon_0=3 +x_0=1700000 +y_0=4200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3946": [
    "RGF93 / CC46",
    "+proj=lcc +lat_1=45.25 +lat_2=46.75 +lat_0=46 +lon_0=3 +x_0=1700000 +y_0=5200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3947": [
    "RGF93 / CC47",
    "+proj=lcc +lat_1=46.25 +lat_2=47.75 +lat_0=47 +lon_0=3 +x_0=1700000 +y_0=6200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3948": [
    "RGF93 / CC48",
    "+proj=lcc +lat_1=47.25 +lat_2=48.75 +lat_0=48 +lon_0=3 +x_0=1700000 +y_0=7200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3949": [
    "RGF93 / CC49",
    "+proj=lcc +lat_1=48.25 +lat_2=49.75 +lat_0=49 +lon_0=3 +x_0=1700000 +y_0=8200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3950": [
    "RGF93 / CC50",
    "+proj=lcc +lat_1=49.25 +lat_2=50.75 +lat_0=50 +lon_0=3 +x_0=1700000 +y_0=9200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3968": [
    "NAD83 / Virginia Lambert",
    "+proj=lcc +lat_1=37 +lat_2=39.5 +lat_0=36 +lon_0=-79.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3969": [
    "NAD83(HARN) / Virginia Lambert",
    "+proj=lcc +lat_1=37 +lat_2=39.5 +lat_0=36 +lon_0=-79.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3970": [
    "NAD83(NSRS2007) / Virginia Lambert",
    "+proj=lcc +lat_1=37 +lat_2=39.5 +lat_0=36 +lon_0=-79.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3975": [
    "WGS 84 / NSIDC EASE-Grid Global",
    "+proj=cea +lon_0=0 +lat_ts=30 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3976": [
    "WGS 84 / NSIDC Sea Ice Polar Stereographic South",
    "+proj=stere +lat_0=-90 +lat_ts=-70 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3978": [
    "NAD83 / Canada Atlas Lambert",
    "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3979": [
    "NAD83(CSRS) / Canada Atlas Lambert",
    "+proj=lcc +lat_1=49 +lat_2=77 +lat_0=49 +lon_0=-95 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3985": [
    "Katanga 1955 / Katanga Lambert (deprecated)",
    "+proj=lcc +lat_1=-6.5 +lat_2=-11.5 +lat_0=9 +lon_0=26 +x_0=500000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3986": [
    "Katanga 1955 / Katanga Gauss zone A",
    "+proj=tmerc +lat_0=-9 +lon_0=30 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3987": [
    "Katanga 1955 / Katanga Gauss zone B",
    "+proj=tmerc +lat_0=-9 +lon_0=28 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3988": [
    "Katanga 1955 / Katanga Gauss zone C",
    "+proj=tmerc +lat_0=-9 +lon_0=26 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3989": [
    "Katanga 1955 / Katanga Gauss zone D",
    "+proj=tmerc +lat_0=-9 +lon_0=24 +k=1 +x_0=200000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:3991": [
    "Puerto Rico State Plane CS of 1927",
    "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=152400.3048006096 +y_0=0 +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3992": [
    "Puerto Rico / St. Croix",
    "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=152400.3048006096 +y_0=30480.06096012192 +ellps=clrk66 +towgs84=11,72,-101,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:3994": [
    "WGS 84 / Mercator 41",
    "+proj=merc +lon_0=100 +lat_ts=-41 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3995": [
    "WGS 84 / Arctic Polar Stereographic",
    "+proj=stere +lat_0=90 +lat_ts=71 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3996": [
    "WGS 84 / IBCAO Polar Stereographic",
    "+proj=stere +lat_0=90 +lat_ts=75 +lon_0=0 +k=1 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:3997": [
    "WGS 84 / Dubai Local TM",
    "+proj=tmerc +lat_0=0 +lon_0=55.33333333333334 +k=1 +x_0=500000 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:4026": [
    "MOLDREF99 / Moldova TM",
    "+proj=tmerc +lat_0=0 +lon_0=28.4 +k=0.9999400000000001 +x_0=200000 +y_0=-5000000 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4037": [
    "WGS 84 / TMzn35N",
    "+proj=utm +zone=35 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:4038": [
    "WGS 84 / TMzn36N",
    "+proj=utm +zone=36 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:4048": [
    "RGRDC 2005 / Congo TM zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4049": [
    "RGRDC 2005 / Congo TM zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=14 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4050": [
    "RGRDC 2005 / Congo TM zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=16 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4051": [
    "RGRDC 2005 / Congo TM zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4056": [
    "RGRDC 2005 / Congo TM zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=20 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4057": [
    "RGRDC 2005 / Congo TM zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=22 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4058": [
    "RGRDC 2005 / Congo TM zone 24",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4059": [
    "RGRDC 2005 / Congo TM zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=26 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4060": [
    "RGRDC 2005 / Congo TM zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=28 +k=0.9999 +x_0=500000 +y_0=10000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4061": [
    "RGRDC 2005 / UTM zone 33S",
    "+proj=utm +zone=33 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4062": [
    "RGRDC 2005 / UTM zone 34S",
    "+proj=utm +zone=34 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4063": [
    "RGRDC 2005 / UTM zone 35S",
    "+proj=utm +zone=35 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4071": [
    "Chua / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=intl +towgs84=-134,229,-29,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4082": [
    "REGCAN95 / UTM zone 27N",
    "+proj=utm +zone=27 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4083": [
    "REGCAN95 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4093": [
    "ETRS89 / DKTM1",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.99998 +x_0=200000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4094": [
    "ETRS89 / DKTM2",
    "+proj=tmerc +lat_0=0 +lon_0=10 +k=0.99998 +x_0=400000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4095": [
    "ETRS89 / DKTM3",
    "+proj=tmerc +lat_0=0 +lon_0=11.75 +k=0.99998 +x_0=600000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4096": [
    "ETRS89 / DKTM4",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=800000 +y_0=-5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4414": [
    "NAD83(HARN) / Guam Map Grid",
    "+proj=tmerc +lat_0=13.5 +lon_0=144.75 +k=1 +x_0=100000 +y_0=200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4415": [
    "Katanga 1955 / Katanga Lambert",
    "+proj=lcc +lat_1=-6.5 +lat_2=-11.5 +lat_0=-9 +lon_0=26 +x_0=500000 +y_0=500000 +ellps=clrk66 +towgs84=-103.746,-9.614,-255.95,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4417": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4434": [
    "Pulkovo 1942(83) / 3-degree Gauss-Kruger zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=26,-121,-78,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4437": [
    "NAD83(NSRS2007) / Puerto Rico and Virgin Is.",
    "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=200000 +y_0=200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4455": [
    "NAD27 / Pennsylvania South",
    "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:4456": [
    "NAD27 / New York Long Island",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.5 +lon_0=-74 +x_0=609601.2192024384 +y_0=30480.06096012192 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:4457": [
    "NAD83 / South Dakota North (ftUS)",
    "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:4462": [
    "WGS 84 / Australian Centre for Remote Sensing Lambert",
    "+proj=lcc +lat_1=-18 +lat_2=-36 +lat_0=-27 +lon_0=132 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:4467": [
    "RGSPM06 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4471": [
    "RGM04 / UTM zone 38S",
    "+proj=utm +zone=38 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4474": [
    "Cadastre 1997 / UTM zone 38S",
    "+proj=utm +zone=38 +south +ellps=intl +towgs84=-382,-59,-262,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4484": [
    "Mexican Datum of 1993 / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4485": [
    "Mexican Datum of 1993 / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4486": [
    "Mexican Datum of 1993 / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4487": [
    "Mexican Datum of 1993 / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4488": [
    "Mexican Datum of 1993 / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4489": [
    "Mexican Datum of 1993 / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4491": [
    "CGCS2000 / Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4492": [
    "CGCS2000 / Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4493": [
    "CGCS2000 / Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4494": [
    "CGCS2000 / Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4495": [
    "CGCS2000 / Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4496": [
    "CGCS2000 / Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4497": [
    "CGCS2000 / Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4498": [
    "CGCS2000 / Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4499": [
    "CGCS2000 / Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4500": [
    "CGCS2000 / Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4501": [
    "CGCS2000 / Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4502": [
    "CGCS2000 / Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4503": [
    "CGCS2000 / Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4504": [
    "CGCS2000 / Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4505": [
    "CGCS2000 / Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4506": [
    "CGCS2000 / Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4507": [
    "CGCS2000 / Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4508": [
    "CGCS2000 / Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4509": [
    "CGCS2000 / Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4510": [
    "CGCS2000 / Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4511": [
    "CGCS2000 / Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4512": [
    "CGCS2000 / Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4513": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4514": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4515": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4516": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4517": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4518": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4519": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4520": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4521": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 33",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4522": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 34",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4523": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 35",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4524": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 36",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4525": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 37",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4526": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 38",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4527": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 39",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4528": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 40",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4529": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 41",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4530": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 42",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4531": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 43",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4532": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 44",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4533": [
    "CGCS2000 / 3-degree Gauss-Kruger zone 45",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4534": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4535": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 78E",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4536": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4537": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 84E",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4538": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4539": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 90E",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4540": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4541": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 96E",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4542": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4543": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 102E",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4544": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4545": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 108E",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4546": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4547": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 114E",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4548": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4549": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 120E",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4550": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4551": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 126E",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4552": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4553": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 132E",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4554": [
    "CGCS2000 / 3-degree Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs ",
  ],
  "EPSG:4559": [
    "RRAF 1991 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4568": [
    "New Beijing / Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4569": [
    "New Beijing / Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4570": [
    "New Beijing / Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4571": [
    "New Beijing / Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4573": [
    "New Beijing / Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4574": [
    "New Beijing / Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4575": [
    "New Beijing / Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4576": [
    "New Beijing / Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4577": [
    "New Beijing / Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4578": [
    "New Beijing / Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4579": [
    "New Beijing / Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4580": [
    "New Beijing / Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4581": [
    "New Beijing / Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4582": [
    "New Beijing / Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4583": [
    "New Beijing / Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4647": [
    "ETRS89 / UTM zone N32",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=32500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:4652": [
    "New Beijing / 3-degree Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4653": [
    "New Beijing / 3-degree Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4654": [
    "New Beijing / 3-degree Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4655": [
    "New Beijing / 3-degree Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4656": [
    "New Beijing / 3-degree Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4766": [
    "New Beijing / 3-degree Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4767": [
    "New Beijing / 3-degree Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4768": [
    "New Beijing / 3-degree Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4769": [
    "New Beijing / 3-degree Gauss-Kruger zone 33",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4770": [
    "New Beijing / 3-degree Gauss-Kruger zone 34",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4771": [
    "New Beijing / 3-degree Gauss-Kruger zone 35",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4772": [
    "New Beijing / 3-degree Gauss-Kruger zone 36",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4773": [
    "New Beijing / 3-degree Gauss-Kruger zone 37",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4774": [
    "New Beijing / 3-degree Gauss-Kruger zone 38",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4775": [
    "New Beijing / 3-degree Gauss-Kruger zone 39",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4776": [
    "New Beijing / 3-degree Gauss-Kruger zone 40",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4777": [
    "New Beijing / 3-degree Gauss-Kruger zone 41",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4778": [
    "New Beijing / 3-degree Gauss-Kruger zone 42",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4779": [
    "New Beijing / 3-degree Gauss-Kruger zone 43",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4780": [
    "New Beijing / 3-degree Gauss-Kruger zone 44",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4781": [
    "New Beijing / 3-degree Gauss-Kruger zone 45",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4782": [
    "New Beijing / 3-degree Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4783": [
    "New Beijing / 3-degree Gauss-Kruger CM 78E",
    "+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4784": [
    "New Beijing / 3-degree Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4785": [
    "New Beijing / 3-degree Gauss-Kruger CM 84E",
    "+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4786": [
    "New Beijing / 3-degree Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4787": [
    "New Beijing / 3-degree Gauss-Kruger CM 90E",
    "+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4788": [
    "New Beijing / 3-degree Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4789": [
    "New Beijing / 3-degree Gauss-Kruger CM 96E",
    "+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:32607": [
    "WGS 84 / UTM zone 7N",
    "+proj=utm +zone=7 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:4790": [
    "New Beijing / 3-degree Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4791": [
    "New Beijing / 3-degree Gauss-Kruger CM 102E",
    "+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4792": [
    "New Beijing / 3-degree Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4793": [
    "New Beijing / 3-degree Gauss-Kruger CM 108E",
    "+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4794": [
    "New Beijing / 3-degree Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4795": [
    "New Beijing / 3-degree Gauss-Kruger CM 114E",
    "+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4796": [
    "New Beijing / 3-degree Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4797": [
    "New Beijing / 3-degree Gauss-Kruger CM 120E",
    "+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4798": [
    "New Beijing / 3-degree Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4799": [
    "New Beijing / 3-degree Gauss-Kruger CM 126E",
    "+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4800": [
    "New Beijing / 3-degree Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4812": [
    "New Beijing / 3-degree Gauss-Kruger CM 132E",
    "+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4822": [
    "New Beijing / 3-degree Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +units=m +no_defs ",
  ],
  "EPSG:4826": [
    "WGS 84 / Cape Verde National",
    "+proj=lcc +lat_1=15 +lat_2=16.66666666666667 +lat_0=15.83333333333333 +lon_0=-24 +x_0=161587.83 +y_0=128511.202 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:20004": [
    "Pulkovo 1995 / Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20005": [
    "Pulkovo 1995 / Gauss-Kruger zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20006": [
    "Pulkovo 1995 / Gauss-Kruger zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20007": [
    "Pulkovo 1995 / Gauss-Kruger zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20008": [
    "Pulkovo 1995 / Gauss-Kruger zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20009": [
    "Pulkovo 1995 / Gauss-Kruger zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20010": [
    "Pulkovo 1995 / Gauss-Kruger zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20011": [
    "Pulkovo 1995 / Gauss-Kruger zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20012": [
    "Pulkovo 1995 / Gauss-Kruger zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20013": [
    "Pulkovo 1995 / Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20014": [
    "Pulkovo 1995 / Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20015": [
    "Pulkovo 1995 / Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20016": [
    "Pulkovo 1995 / Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20017": [
    "Pulkovo 1995 / Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20018": [
    "Pulkovo 1995 / Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20019": [
    "Pulkovo 1995 / Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20020": [
    "Pulkovo 1995 / Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20021": [
    "Pulkovo 1995 / Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20022": [
    "Pulkovo 1995 / Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20023": [
    "Pulkovo 1995 / Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20024": [
    "Pulkovo 1995 / Gauss-Kruger zone 24",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20025": [
    "Pulkovo 1995 / Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20026": [
    "Pulkovo 1995 / Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20027": [
    "Pulkovo 1995 / Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20028": [
    "Pulkovo 1995 / Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20029": [
    "Pulkovo 1995 / Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20030": [
    "Pulkovo 1995 / Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20031": [
    "Pulkovo 1995 / Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20032": [
    "Pulkovo 1995 / Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20064": [
    "Pulkovo 1995 / Gauss-Kruger 4N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20065": [
    "Pulkovo 1995 / Gauss-Kruger 5N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20066": [
    "Pulkovo 1995 / Gauss-Kruger 6N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20067": [
    "Pulkovo 1995 / Gauss-Kruger 7N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20068": [
    "Pulkovo 1995 / Gauss-Kruger 8N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20069": [
    "Pulkovo 1995 / Gauss-Kruger 9N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20070": [
    "Pulkovo 1995 / Gauss-Kruger 10N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20071": [
    "Pulkovo 1995 / Gauss-Kruger 11N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20072": [
    "Pulkovo 1995 / Gauss-Kruger 12N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20073": [
    "Pulkovo 1995 / Gauss-Kruger 13N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20074": [
    "Pulkovo 1995 / Gauss-Kruger 14N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20075": [
    "Pulkovo 1995 / Gauss-Kruger 15N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20076": [
    "Pulkovo 1995 / Gauss-Kruger 16N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20077": [
    "Pulkovo 1995 / Gauss-Kruger 17N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20078": [
    "Pulkovo 1995 / Gauss-Kruger 18N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20079": [
    "Pulkovo 1995 / Gauss-Kruger 19N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20080": [
    "Pulkovo 1995 / Gauss-Kruger 20N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20081": [
    "Pulkovo 1995 / Gauss-Kruger 21N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20082": [
    "Pulkovo 1995 / Gauss-Kruger 22N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20083": [
    "Pulkovo 1995 / Gauss-Kruger 23N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20084": [
    "Pulkovo 1995 / Gauss-Kruger 24N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20085": [
    "Pulkovo 1995 / Gauss-Kruger 25N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20086": [
    "Pulkovo 1995 / Gauss-Kruger 26N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20087": [
    "Pulkovo 1995 / Gauss-Kruger 27N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20088": [
    "Pulkovo 1995 / Gauss-Kruger 28N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20089": [
    "Pulkovo 1995 / Gauss-Kruger 29N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20090": [
    "Pulkovo 1995 / Gauss-Kruger 30N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20091": [
    "Pulkovo 1995 / Gauss-Kruger 31N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20092": [
    "Pulkovo 1995 / Gauss-Kruger 32N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=24.82,-131.21,-82.66,-0,-0,0.16,-0.12 +units=m +no_defs ",
  ],
  "EPSG:20135": [
    "Adindan / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20136": [
    "Adindan / UTM zone 36N",
    "+proj=utm +zone=36 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20137": [
    "Adindan / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20138": [
    "Adindan / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=clrk80 +towgs84=-166,-15,204,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20248": [
    "AGD66 / AMG zone 48",
    "+proj=utm +zone=48 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20249": [
    "AGD66 / AMG zone 49",
    "+proj=utm +zone=49 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20250": [
    "AGD66 / AMG zone 50",
    "+proj=utm +zone=50 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20251": [
    "AGD66 / AMG zone 51",
    "+proj=utm +zone=51 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20252": [
    "AGD66 / AMG zone 52",
    "+proj=utm +zone=52 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20253": [
    "AGD66 / AMG zone 53",
    "+proj=utm +zone=53 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20254": [
    "AGD66 / AMG zone 54",
    "+proj=utm +zone=54 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20255": [
    "AGD66 / AMG zone 55",
    "+proj=utm +zone=55 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20256": [
    "AGD66 / AMG zone 56",
    "+proj=utm +zone=56 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20257": [
    "AGD66 / AMG zone 57",
    "+proj=utm +zone=57 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20258": [
    "AGD66 / AMG zone 58",
    "+proj=utm +zone=58 +south +ellps=aust_SA +towgs84=-117.808,-51.536,137.784,0.303,0.446,0.234,-0.29 +units=m +no_defs ",
  ],
  "EPSG:20348": [
    "AGD84 / AMG zone 48",
    "+proj=utm +zone=48 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20349": [
    "AGD84 / AMG zone 49",
    "+proj=utm +zone=49 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20350": [
    "AGD84 / AMG zone 50",
    "+proj=utm +zone=50 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20351": [
    "AGD84 / AMG zone 51",
    "+proj=utm +zone=51 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20352": [
    "AGD84 / AMG zone 52",
    "+proj=utm +zone=52 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20353": [
    "AGD84 / AMG zone 53",
    "+proj=utm +zone=53 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20354": [
    "AGD84 / AMG zone 54",
    "+proj=utm +zone=54 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20355": [
    "AGD84 / AMG zone 55",
    "+proj=utm +zone=55 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20356": [
    "AGD84 / AMG zone 56",
    "+proj=utm +zone=56 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20357": [
    "AGD84 / AMG zone 57",
    "+proj=utm +zone=57 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20358": [
    "AGD84 / AMG zone 58",
    "+proj=utm +zone=58 +south +ellps=aust_SA +towgs84=-134,-48,149,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20436": [
    "Ain el Abd / UTM zone 36N",
    "+proj=utm +zone=36 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20437": [
    "Ain el Abd / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20438": [
    "Ain el Abd / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20439": [
    "Ain el Abd / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20440": [
    "Ain el Abd / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20499": [
    "Ain el Abd / Bahrain Grid",
    "+proj=utm +zone=39 +ellps=intl +towgs84=-143,-236,7,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20538": [
    "Afgooye / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=krass +towgs84=-43,-163,45,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20539": [
    "Afgooye / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=krass +towgs84=-43,-163,45,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20790": [
    "Lisbon (Lisbon) / Portuguese National Grid",
    "+proj=tmerc +lat_0=39.66666666666666 +lon_0=1 +k=1 +x_0=200000 +y_0=300000 +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +pm=lisbon +units=m +no_defs ",
  ],
  "EPSG:20791": [
    "Lisbon (Lisbon) / Portuguese Grid",
    "+proj=tmerc +lat_0=39.66666666666666 +lon_0=1 +k=1 +x_0=0 +y_0=0 +ellps=intl +towgs84=-304.046,-60.576,103.64,0,0,0,0 +pm=lisbon +units=m +no_defs ",
  ],
  "EPSG:20822": [
    "Aratu / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=intl +towgs84=-161,308,-142,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20823": [
    "Aratu / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=intl +towgs84=-161,308,-142,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20824": [
    "Aratu / UTM zone 24S",
    "+proj=utm +zone=24 +south +ellps=intl +towgs84=-161,308,-142,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20934": [
    "Arc 1950 / UTM zone 34S",
    "+proj=utm +zone=34 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20935": [
    "Arc 1950 / UTM zone 35S",
    "+proj=utm +zone=35 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:20936": [
    "Arc 1950 / UTM zone 36S",
    "+proj=utm +zone=36 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-143,-90,-294,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21035": [
    "Arc 1960 / UTM zone 35S",
    "+proj=utm +zone=35 +south +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21036": [
    "Arc 1960 / UTM zone 36S",
    "+proj=utm +zone=36 +south +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21037": [
    "Arc 1960 / UTM zone 37S",
    "+proj=utm +zone=37 +south +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21095": [
    "Arc 1960 / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21096": [
    "Arc 1960 / UTM zone 36N",
    "+proj=utm +zone=36 +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21097": [
    "Arc 1960 / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=clrk80 +towgs84=-160,-6,-302,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21100": [
    "Batavia (Jakarta) / NEIEZ (deprecated)",
    "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +pm=jakarta +units=m +no_defs ",
  ],
  "EPSG:21148": [
    "Batavia / UTM zone 48S",
    "+proj=utm +zone=48 +south +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21149": [
    "Batavia / UTM zone 49S",
    "+proj=utm +zone=49 +south +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21150": [
    "Batavia / UTM zone 50S",
    "+proj=utm +zone=50 +south +ellps=bessel +towgs84=-377,681,-50,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21291": [
    "Barbados 1938 / British West Indies Grid",
    "+proj=tmerc +lat_0=0 +lon_0=-62 +k=0.9995000000000001 +x_0=400000 +y_0=0 +ellps=clrk80 +towgs84=31.95,300.99,419.19,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21292": [
    "Barbados 1938 / Barbados National Grid",
    "+proj=tmerc +lat_0=13.17638888888889 +lon_0=-59.55972222222222 +k=0.9999986 +x_0=30000 +y_0=75000 +ellps=clrk80 +towgs84=31.95,300.99,419.19,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21413": [
    "Beijing 1954 / Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21414": [
    "Beijing 1954 / Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21415": [
    "Beijing 1954 / Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21416": [
    "Beijing 1954 / Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21417": [
    "Beijing 1954 / Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32608": [
    "WGS 84 / UTM zone 8N",
    "+proj=utm +zone=8 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:21418": [
    "Beijing 1954 / Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21419": [
    "Beijing 1954 / Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21420": [
    "Beijing 1954 / Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21421": [
    "Beijing 1954 / Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21422": [
    "Beijing 1954 / Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21423": [
    "Beijing 1954 / Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21453": [
    "Beijing 1954 / Gauss-Kruger CM 75E",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21454": [
    "Beijing 1954 / Gauss-Kruger CM 81E",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21455": [
    "Beijing 1954 / Gauss-Kruger CM 87E",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21456": [
    "Beijing 1954 / Gauss-Kruger CM 93E",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21457": [
    "Beijing 1954 / Gauss-Kruger CM 99E",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21458": [
    "Beijing 1954 / Gauss-Kruger CM 105E",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21459": [
    "Beijing 1954 / Gauss-Kruger CM 111E",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21460": [
    "Beijing 1954 / Gauss-Kruger CM 117E",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21461": [
    "Beijing 1954 / Gauss-Kruger CM 123E",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21462": [
    "Beijing 1954 / Gauss-Kruger CM 129E",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21463": [
    "Beijing 1954 / Gauss-Kruger CM 135E",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21473": [
    "Beijing 1954 / Gauss-Kruger 13N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21474": [
    "Beijing 1954 / Gauss-Kruger 14N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21475": [
    "Beijing 1954 / Gauss-Kruger 15N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21476": [
    "Beijing 1954 / Gauss-Kruger 16N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21477": [
    "Beijing 1954 / Gauss-Kruger 17N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21478": [
    "Beijing 1954 / Gauss-Kruger 18N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21479": [
    "Beijing 1954 / Gauss-Kruger 19N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21480": [
    "Beijing 1954 / Gauss-Kruger 20N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21481": [
    "Beijing 1954 / Gauss-Kruger 21N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21482": [
    "Beijing 1954 / Gauss-Kruger 22N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21483": [
    "Beijing 1954 / Gauss-Kruger 23N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21500": [
    "Belge 1950 (Brussels) / Belge Lambert 50",
    "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=90 +lon_0=0 +x_0=150000 +y_0=5400000 +ellps=intl +pm=brussels +units=m +no_defs ",
  ],
  "EPSG:21780": [
    "Bern 1898 (Bern) / LV03C",
    "+proj=somerc +lat_0=46.95240555555556 +lon_0=0 +k_0=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +pm=bern +units=m +no_defs ",
  ],
  "EPSG:21781": [
    "CH1903 / LV03",
    "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=600000 +y_0=200000 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21782": [
    "CH1903 / LV03C-G",
    "+proj=somerc +lat_0=46.95240555555556 +lon_0=7.439583333333333 +k_0=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=674.4,15.1,405.3,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21817": [
    "Bogota 1975 / UTM zone 17N (deprecated)",
    "+proj=utm +zone=17 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21818": [
    "Bogota 1975 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21891": [
    "Bogota 1975 / Colombia West zone (deprecated)",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-77.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21892": [
    "Bogota 1975 / Colombia Bogota zone (deprecated)",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-74.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21893": [
    "Bogota 1975 / Colombia East Central zone (deprecated)",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-71.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21894": [
    "Bogota 1975 / Colombia East (deprecated)",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-68.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21896": [
    "Bogota 1975 / Colombia West zone",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-77.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21897": [
    "Bogota 1975 / Colombia Bogota zone",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-74.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21898": [
    "Bogota 1975 / Colombia East Central zone",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-71.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:21899": [
    "Bogota 1975 / Colombia East",
    "+proj=tmerc +lat_0=4.599047222222222 +lon_0=-68.08091666666667 +k=1 +x_0=1000000 +y_0=1000000 +ellps=intl +towgs84=307,304,-318,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22032": [
    "Camacupa / UTM zone 32S",
    "+proj=utm +zone=32 +south +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22033": [
    "Camacupa / UTM zone 33S",
    "+proj=utm +zone=33 +south +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22091": [
    "Camacupa / TM 11.30 SE",
    "+proj=tmerc +lat_0=0 +lon_0=11.5 +k=0.9996 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22092": [
    "Camacupa / TM 12 SE",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=0.9996 +x_0=500000 +y_0=10000000 +ellps=clrk80 +towgs84=-50.9,-347.6,-231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22171": [
    "POSGAR 98 / Argentina 1",
    "+proj=tmerc +lat_0=-90 +lon_0=-72 +k=1 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22172": [
    "POSGAR 98 / Argentina 2",
    "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22173": [
    "POSGAR 98 / Argentina 3",
    "+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22174": [
    "POSGAR 98 / Argentina 4",
    "+proj=tmerc +lat_0=-90 +lon_0=-63 +k=1 +x_0=4500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22175": [
    "POSGAR 98 / Argentina 5",
    "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22176": [
    "POSGAR 98 / Argentina 6",
    "+proj=tmerc +lat_0=-90 +lon_0=-57 +k=1 +x_0=6500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22177": [
    "POSGAR 98 / Argentina 7",
    "+proj=tmerc +lat_0=-90 +lon_0=-54 +k=1 +x_0=7500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22181": [
    "POSGAR 94 / Argentina 1",
    "+proj=tmerc +lat_0=-90 +lon_0=-72 +k=1 +x_0=1500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22182": [
    "POSGAR 94 / Argentina 2",
    "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22183": [
    "POSGAR 94 / Argentina 3",
    "+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22184": [
    "POSGAR 94 / Argentina 4",
    "+proj=tmerc +lat_0=-90 +lon_0=-63 +k=1 +x_0=4500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22185": [
    "POSGAR 94 / Argentina 5",
    "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22186": [
    "POSGAR 94 / Argentina 6",
    "+proj=tmerc +lat_0=-90 +lon_0=-57 +k=1 +x_0=6500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22187": [
    "POSGAR 94 / Argentina 7",
    "+proj=tmerc +lat_0=-90 +lon_0=-54 +k=1 +x_0=7500000 +y_0=0 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22191": [
    "Campo Inchauspe / Argentina 1",
    "+proj=tmerc +lat_0=-90 +lon_0=-72 +k=1 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22192": [
    "Campo Inchauspe / Argentina 2",
    "+proj=tmerc +lat_0=-90 +lon_0=-69 +k=1 +x_0=2500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22193": [
    "Campo Inchauspe / Argentina 3",
    "+proj=tmerc +lat_0=-90 +lon_0=-66 +k=1 +x_0=3500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22194": [
    "Campo Inchauspe / Argentina 4",
    "+proj=tmerc +lat_0=-90 +lon_0=-63 +k=1 +x_0=4500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22195": [
    "Campo Inchauspe / Argentina 5",
    "+proj=tmerc +lat_0=-90 +lon_0=-60 +k=1 +x_0=5500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22196": [
    "Campo Inchauspe / Argentina 6",
    "+proj=tmerc +lat_0=-90 +lon_0=-57 +k=1 +x_0=6500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22197": [
    "Campo Inchauspe / Argentina 7",
    "+proj=tmerc +lat_0=-90 +lon_0=-54 +k=1 +x_0=7500000 +y_0=0 +ellps=intl +towgs84=-148,136,90,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22234": [
    "Cape / UTM zone 34S",
    "+proj=utm +zone=34 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22235": [
    "Cape / UTM zone 35S",
    "+proj=utm +zone=35 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22236": [
    "Cape / UTM zone 36S",
    "+proj=utm +zone=36 +south +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22275": [
    "Cape / Lo15",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22277": [
    "Cape / Lo17",
    "+proj=tmerc +lat_0=0 +lon_0=17 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22279": [
    "Cape / Lo19",
    "+proj=tmerc +lat_0=0 +lon_0=19 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22281": [
    "Cape / Lo21",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22283": [
    "Cape / Lo23",
    "+proj=tmerc +lat_0=0 +lon_0=23 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22285": [
    "Cape / Lo25",
    "+proj=tmerc +lat_0=0 +lon_0=25 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22287": [
    "Cape / Lo27",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22289": [
    "Cape / Lo29",
    "+proj=tmerc +lat_0=0 +lon_0=29 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22291": [
    "Cape / Lo31",
    "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22293": [
    "Cape / Lo33",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=0 +y_0=0 +axis=wsu +a=6378249.145 +b=6356514.966398753 +towgs84=-136,-108,-292,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22300": ["Carthage (Paris) / Tunisia Mining Grid", ""],
  "EPSG:22332": [
    "Carthage / UTM zone 32N",
    "+proj=utm +zone=32 +a=6378249.2 +b=6356515 +towgs84=-263,6,431,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22391": [
    "Carthage / Nord Tunisie",
    "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=9.9 +k_0=0.999625544 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-263,6,431,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22392": [
    "Carthage / Sud Tunisie",
    "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=9.9 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-263,6,431,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22521": [
    "Corrego Alegre / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=intl +towgs84=-206,172,-6,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22522": [
    "Corrego Alegre / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=intl +towgs84=-206,172,-6,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22523": [
    "Corrego Alegre / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=intl +towgs84=-206,172,-6,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22524": [
    "Corrego Alegre / UTM zone 24S",
    "+proj=utm +zone=24 +south +ellps=intl +towgs84=-206,172,-6,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22525": [
    "Corrego Alegre / UTM zone 25S",
    "+proj=utm +zone=25 +south +ellps=intl +towgs84=-206,172,-6,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22700": [
    "Deir ez Zor / Levant Zone",
    "+proj=lcc +lat_1=34.65 +lat_0=34.65 +lon_0=37.35 +k_0=0.9996256 +x_0=300000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22770": [
    "Deir ez Zor / Syria Lambert",
    "+proj=lcc +lat_1=34.65 +lat_0=34.65 +lon_0=37.35 +k_0=0.9996256 +x_0=300000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22780": [
    "Deir ez Zor / Levant Stereographic",
    "+proj=sterea +lat_0=34.2 +lon_0=39.15 +k=0.9995341 +x_0=0 +y_0=0 +a=6378249.2 +b=6356515 +towgs84=-190.421,8.532,238.69,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22832": [
    "Douala / UTM zone 32N (deprecated)",
    "+proj=utm +zone=32 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:22991": [
    "Egypt 1907 / Blue Belt",
    "+proj=tmerc +lat_0=30 +lon_0=35 +k=1 +x_0=300000 +y_0=1100000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22992": [
    "Egypt 1907 / Red Belt",
    "+proj=tmerc +lat_0=30 +lon_0=31 +k=1 +x_0=615000 +y_0=810000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:22993": [
    "Egypt 1907 / Purple Belt",
    "+proj=tmerc +lat_0=30 +lon_0=27 +k=1 +x_0=700000 +y_0=200000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26709": [
    "NAD27 / UTM zone 9N",
    "+proj=utm +zone=9 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:22994": [
    "Egypt 1907 / Extended Purple Belt",
    "+proj=tmerc +lat_0=30 +lon_0=27 +k=1 +x_0=700000 +y_0=1200000 +ellps=helmert +towgs84=-130,110,-13,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23028": [
    "ED50 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23029": [
    "ED50 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23030": [
    "ED50 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23031": [
    "ED50 / UTM zone 31N",
    "+proj=utm +zone=31 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23032": [
    "ED50 / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23033": [
    "ED50 / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23034": [
    "ED50 / UTM zone 34N",
    "+proj=utm +zone=34 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23035": [
    "ED50 / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23036": [
    "ED50 / UTM zone 36N",
    "+proj=utm +zone=36 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23037": [
    "ED50 / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23038": [
    "ED50 / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23090": [
    "ED50 / TM 0 N",
    "+proj=tmerc +lat_0=0 +lon_0=0 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23095": [
    "ED50 / TM 5 NE",
    "+proj=tmerc +lat_0=0 +lon_0=5 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23239": [
    "Fahud / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=clrk80 +towgs84=-346,-1,224,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23240": [
    "Fahud / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=clrk80 +towgs84=-346,-1,224,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23433": [
    "Garoua / UTM zone 33N (deprecated)",
    "+proj=utm +zone=33 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:23700": [
    "HD72 / EOV",
    "+proj=somerc +lat_0=47.14439372222222 +lon_0=19.04857177777778 +k_0=0.99993 +x_0=650000 +y_0=200000 +ellps=GRS67 +towgs84=52.17,-71.82,-14.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23830": [
    "DGN95 / Indonesia TM-3 zone 46.2",
    "+proj=tmerc +lat_0=0 +lon_0=94.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23831": [
    "DGN95 / Indonesia TM-3 zone 47.1",
    "+proj=tmerc +lat_0=0 +lon_0=97.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23832": [
    "DGN95 / Indonesia TM-3 zone 47.2",
    "+proj=tmerc +lat_0=0 +lon_0=100.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23833": [
    "DGN95 / Indonesia TM-3 zone 48.1",
    "+proj=tmerc +lat_0=0 +lon_0=103.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23834": [
    "DGN95 / Indonesia TM-3 zone 48.2",
    "+proj=tmerc +lat_0=0 +lon_0=106.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23835": [
    "DGN95 / Indonesia TM-3 zone 49.1",
    "+proj=tmerc +lat_0=0 +lon_0=109.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23836": [
    "DGN95 / Indonesia TM-3 zone 49.2",
    "+proj=tmerc +lat_0=0 +lon_0=112.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23837": [
    "DGN95 / Indonesia TM-3 zone 50.1",
    "+proj=tmerc +lat_0=0 +lon_0=115.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23838": [
    "DGN95 / Indonesia TM-3 zone 50.2",
    "+proj=tmerc +lat_0=0 +lon_0=118.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23839": [
    "DGN95 / Indonesia TM-3 zone 51.1",
    "+proj=tmerc +lat_0=0 +lon_0=121.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23840": [
    "DGN95 / Indonesia TM-3 zone 51.2",
    "+proj=tmerc +lat_0=0 +lon_0=124.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26710": [
    "NAD27 / UTM zone 10N",
    "+proj=utm +zone=10 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:23841": [
    "DGN95 / Indonesia TM-3 zone 52.1",
    "+proj=tmerc +lat_0=0 +lon_0=127.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23842": [
    "DGN95 / Indonesia TM-3 zone 52.2",
    "+proj=tmerc +lat_0=0 +lon_0=130.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23843": [
    "DGN95 / Indonesia TM-3 zone 53.1",
    "+proj=tmerc +lat_0=0 +lon_0=133.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23844": [
    "DGN95 / Indonesia TM-3 zone 53.2",
    "+proj=tmerc +lat_0=0 +lon_0=136.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23845": [
    "DGN95 / Indonesia TM-3 zone 54.1",
    "+proj=tmerc +lat_0=0 +lon_0=139.5 +k=0.9999 +x_0=200000 +y_0=1500000 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23846": [
    "ID74 / UTM zone 46N",
    "+proj=utm +zone=46 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23847": [
    "ID74 / UTM zone 47N",
    "+proj=utm +zone=47 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23848": [
    "ID74 / UTM zone 48N",
    "+proj=utm +zone=48 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23849": [
    "ID74 / UTM zone 49N",
    "+proj=utm +zone=49 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23850": [
    "ID74 / UTM zone 50N",
    "+proj=utm +zone=50 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23851": [
    "ID74 / UTM zone 51N",
    "+proj=utm +zone=51 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23852": [
    "ID74 / UTM zone 52N",
    "+proj=utm +zone=52 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23853": [
    "ID74 / UTM zone 53N (deprecated)",
    "+proj=utm +zone=53 +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23866": [
    "DGN95 / UTM zone 46N",
    "+proj=utm +zone=46 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23867": [
    "DGN95 / UTM zone 47N",
    "+proj=utm +zone=47 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23868": [
    "DGN95 / UTM zone 48N",
    "+proj=utm +zone=48 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23869": [
    "DGN95 / UTM zone 49N",
    "+proj=utm +zone=49 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23870": [
    "DGN95 / UTM zone 50N",
    "+proj=utm +zone=50 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23871": [
    "DGN95 / UTM zone 51N",
    "+proj=utm +zone=51 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23872": [
    "DGN95 / UTM zone 52N",
    "+proj=utm +zone=52 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23877": [
    "DGN95 / UTM zone 47S",
    "+proj=utm +zone=47 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23878": [
    "DGN95 / UTM zone 48S",
    "+proj=utm +zone=48 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23879": [
    "DGN95 / UTM zone 49S",
    "+proj=utm +zone=49 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23880": [
    "DGN95 / UTM zone 50S",
    "+proj=utm +zone=50 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23881": [
    "DGN95 / UTM zone 51S",
    "+proj=utm +zone=51 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23882": [
    "DGN95 / UTM zone 52S",
    "+proj=utm +zone=52 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23883": [
    "DGN95 / UTM zone 53S",
    "+proj=utm +zone=53 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23884": [
    "DGN95 / UTM zone 54S",
    "+proj=utm +zone=54 +south +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23886": [
    "ID74 / UTM zone 46S (deprecated)",
    "+proj=utm +zone=46 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23887": [
    "ID74 / UTM zone 47S",
    "+proj=utm +zone=47 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23888": [
    "ID74 / UTM zone 48S",
    "+proj=utm +zone=48 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23889": [
    "ID74 / UTM zone 49S",
    "+proj=utm +zone=49 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23890": [
    "ID74 / UTM zone 50S",
    "+proj=utm +zone=50 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23891": [
    "ID74 / UTM zone 51S",
    "+proj=utm +zone=51 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23892": [
    "ID74 / UTM zone 52S",
    "+proj=utm +zone=52 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23893": [
    "ID74 / UTM zone 53S",
    "+proj=utm +zone=53 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23894": [
    "ID74 / UTM zone 54S",
    "+proj=utm +zone=54 +south +a=6378160 +b=6356774.50408554 +towgs84=-24,-15,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23946": [
    "Indian 1954 / UTM zone 46N",
    "+proj=utm +zone=46 +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23947": [
    "Indian 1954 / UTM zone 47N",
    "+proj=utm +zone=47 +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:23948": [
    "Indian 1954 / UTM zone 48N",
    "+proj=utm +zone=48 +a=6377276.345 +b=6356075.41314024 +towgs84=217,823,299,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24047": [
    "Indian 1975 / UTM zone 47N",
    "+proj=utm +zone=47 +a=6377276.345 +b=6356075.41314024 +towgs84=210,814,289,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24048": [
    "Indian 1975 / UTM zone 48N",
    "+proj=utm +zone=48 +a=6377276.345 +b=6356075.41314024 +towgs84=210,814,289,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24100": [
    "Jamaica 1875 / Jamaica (Old Grid)",
    "+proj=lcc +lat_1=18 +lat_0=18 +lon_0=-77 +k_0=1 +x_0=167638.49597 +y_0=121918.90616 +a=6378249.144808011 +b=6356514.966204134 +to_meter=0.3047972654 +no_defs ",
  ],
  "EPSG:24200": [
    "JAD69 / Jamaica National Grid",
    "+proj=lcc +lat_1=18 +lat_0=18 +lon_0=-77 +k_0=1 +x_0=250000 +y_0=150000 +ellps=clrk66 +towgs84=70,207,389.5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24305": [
    "Kalianpur 1937 / UTM zone 45N",
    "+proj=utm +zone=45 +a=6377276.345 +b=6356075.41314024 +towgs84=282,726,254,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24306": [
    "Kalianpur 1937 / UTM zone 46N",
    "+proj=utm +zone=46 +a=6377276.345 +b=6356075.41314024 +towgs84=282,726,254,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24311": [
    "Kalianpur 1962 / UTM zone 41N",
    "+proj=utm +zone=41 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24312": [
    "Kalianpur 1962 / UTM zone 42N",
    "+proj=utm +zone=42 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24313": [
    "Kalianpur 1962 / UTM zone 43N",
    "+proj=utm +zone=43 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24342": [
    "Kalianpur 1975 / UTM zone 42N",
    "+proj=utm +zone=42 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24343": [
    "Kalianpur 1975 / UTM zone 43N",
    "+proj=utm +zone=43 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24344": [
    "Kalianpur 1975 / UTM zone 44N",
    "+proj=utm +zone=44 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24345": [
    "Kalianpur 1975 / UTM zone 45N",
    "+proj=utm +zone=45 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24346": [
    "Kalianpur 1975 / UTM zone 46N",
    "+proj=utm +zone=46 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24347": [
    "Kalianpur 1975 / UTM zone 47N",
    "+proj=utm +zone=47 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24370": [
    "Kalianpur 1880 / India zone 0",
    "+proj=lcc +lat_1=39.5 +lat_0=39.5 +lon_0=68 +k_0=0.99846154 +x_0=2153865.73916853 +y_0=2368292.194628102 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs ",
  ],
  "EPSG:24371": [
    "Kalianpur 1880 / India zone I",
    "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=68 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs ",
  ],
  "EPSG:24372": [
    "Kalianpur 1880 / India zone IIa",
    "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=74 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs ",
  ],
  "EPSG:24373": [
    "Kalianpur 1880 / India zone III",
    "+proj=lcc +lat_1=19 +lat_0=19 +lon_0=80 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs ",
  ],
  "EPSG:24374": [
    "Kalianpur 1880 / India zone IV",
    "+proj=lcc +lat_1=12 +lat_0=12 +lon_0=80 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs ",
  ],
  "EPSG:24375": [
    "Kalianpur 1937 / India zone IIb",
    "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=90 +k_0=0.99878641 +x_0=2743185.69 +y_0=914395.23 +a=6377276.345 +b=6356075.41314024 +towgs84=282,726,254,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24376": [
    "Kalianpur 1962 / India zone I",
    "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=68 +k_0=0.99878641 +x_0=2743196.4 +y_0=914398.8 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24377": [
    "Kalianpur 1962 / India zone IIa",
    "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=74 +k_0=0.99878641 +x_0=2743196.4 +y_0=914398.8 +a=6377301.243 +b=6356100.230165384 +towgs84=283,682,231,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24378": [
    "Kalianpur 1975 / India zone I",
    "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=68 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24379": [
    "Kalianpur 1975 / India zone IIa",
    "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=74 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24380": [
    "Kalianpur 1975 / India zone IIb",
    "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=90 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26711": [
    "NAD27 / UTM zone 11N",
    "+proj=utm +zone=11 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:24381": [
    "Kalianpur 1975 / India zone III",
    "+proj=lcc +lat_1=19 +lat_0=19 +lon_0=80 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24382": [
    "Kalianpur 1880 / India zone IIb",
    "+proj=lcc +lat_1=26 +lat_0=26 +lon_0=90 +k_0=0.99878641 +x_0=2743195.592233322 +y_0=914398.5307444407 +a=6377299.36559538 +b=6356098.359005156 +to_meter=0.9143985307444408 +no_defs ",
  ],
  "EPSG:24383": [
    "Kalianpur 1975 / India zone IV",
    "+proj=lcc +lat_1=12 +lat_0=12 +lon_0=80 +k_0=0.99878641 +x_0=2743195.5 +y_0=914398.5 +a=6377299.151 +b=6356098.145120132 +towgs84=295,736,257,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24500": [
    "Kertau 1968 / Singapore Grid",
    "+proj=cass +lat_0=1.287646666666667 +lon_0=103.8530022222222 +x_0=30000 +y_0=30000 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24547": [
    "Kertau 1968 / UTM zone 47N",
    "+proj=utm +zone=47 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24548": [
    "Kertau 1968 / UTM zone 48N",
    "+proj=utm +zone=48 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24571": [
    "Kertau / R.S.O. Malaya (ch) (deprecated)",
    "+proj=omerc +lat_0=4 +lonc=102.25 +alpha=323.0257905 +k=0.99984 +x_0=804671.2997750348 +y_0=0 +gamma=323.1301023611111 +a=6377304.063 +b=6356103.038993155 +towgs84=-11,851,5,0,0,0,0 +to_meter=20.11678249437587 +no_defs ",
  ],
  "EPSG:24600": [
    "KOC Lambert",
    "+proj=lcc +lat_1=32.5 +lat_0=32.5 +lon_0=45 +k_0=0.9987864078000001 +x_0=1500000 +y_0=1166200 +ellps=clrk80 +towgs84=-294.7,-200.1,525.5,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24718": [
    "La Canoa / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24719": [
    "La Canoa / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24720": [
    "La Canoa / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=intl +towgs84=-273.5,110.6,-357.9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24817": [
    "PSAD56 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24818": [
    "PSAD56 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24819": [
    "PSAD56 / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24820": [
    "PSAD56 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24821": [
    "PSAD56 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24877": [
    "PSAD56 / UTM zone 17S",
    "+proj=utm +zone=17 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24878": [
    "PSAD56 / UTM zone 18S",
    "+proj=utm +zone=18 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24879": [
    "PSAD56 / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24880": [
    "PSAD56 / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24881": [
    "PSAD56 / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24882": [
    "PSAD56 / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24891": [
    "PSAD56 / Peru west zone",
    "+proj=tmerc +lat_0=-6 +lon_0=-80.5 +k=0.99983008 +x_0=222000 +y_0=1426834.743 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24892": [
    "PSAD56 / Peru central zone",
    "+proj=tmerc +lat_0=-9.5 +lon_0=-76 +k=0.99932994 +x_0=720000 +y_0=1039979.159 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:24893": [
    "PSAD56 / Peru east zone",
    "+proj=tmerc +lat_0=-9.5 +lon_0=-70.5 +k=0.99952992 +x_0=1324000 +y_0=1040084.558 +ellps=intl +towgs84=-288,175,-376,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25000": [
    "Leigon / Ghana Metre Grid",
    "+proj=tmerc +lat_0=4.666666666666667 +lon_0=-1 +k=0.99975 +x_0=274319.51 +y_0=0 +ellps=clrk80 +towgs84=-130,29,364,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25231": [
    "Lome / UTM zone 31N",
    "+proj=utm +zone=31 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:25391": [
    "Luzon 1911 / Philippines zone I",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26712": [
    "NAD27 / UTM zone 12N",
    "+proj=utm +zone=12 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:25392": [
    "Luzon 1911 / Philippines zone II",
    "+proj=tmerc +lat_0=0 +lon_0=119 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25393": [
    "Luzon 1911 / Philippines zone III",
    "+proj=tmerc +lat_0=0 +lon_0=121 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25394": [
    "Luzon 1911 / Philippines zone IV",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25395": [
    "Luzon 1911 / Philippines zone V",
    "+proj=tmerc +lat_0=0 +lon_0=125 +k=0.99995 +x_0=500000 +y_0=0 +ellps=clrk66 +towgs84=-133,-77,-51,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25700": [
    "Makassar (Jakarta) / NEIEZ (deprecated)",
    "+proj=merc +lon_0=110 +k=0.997 +x_0=3900000 +y_0=900000 +ellps=bessel +towgs84=-587.8,519.75,145.76,0,0,0,0 +pm=jakarta +units=m +no_defs ",
  ],
  "EPSG:25828": [
    "ETRS89 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25829": [
    "ETRS89 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25830": [
    "ETRS89 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25831": [
    "ETRS89 / UTM zone 31N",
    "+proj=utm +zone=31 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25832": [
    "ETRS89 / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25833": [
    "ETRS89 / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25834": [
    "ETRS89 / UTM zone 34N",
    "+proj=utm +zone=34 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25835": [
    "ETRS89 / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25836": [
    "ETRS89 / UTM zone 36N",
    "+proj=utm +zone=36 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25837": [
    "ETRS89 / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25838": [
    "ETRS89 / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25884": [
    "ETRS89 / TM Baltic93",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:25932": [
    "Malongo 1987 / UTM zone 32S",
    "+proj=utm +zone=32 +south +ellps=intl +towgs84=-254.1,-5.36,-100.29,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26191": [
    "Merchich / Nord Maroc",
    "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=-5.4 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26192": [
    "Merchich / Sud Maroc",
    "+proj=lcc +lat_1=29.7 +lat_0=29.7 +lon_0=-5.4 +k_0=0.9996155960000001 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26193": [
    "Merchich / Sahara (deprecated)",
    "+proj=lcc +lat_1=26.1 +lat_0=26.1 +lon_0=-5.4 +k_0=0.9996 +x_0=1200000 +y_0=400000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26194": [
    "Merchich / Sahara Nord",
    "+proj=lcc +lat_1=26.1 +lat_0=26.1 +lon_0=-5.4 +k_0=0.999616304 +x_0=1200000 +y_0=400000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26195": [
    "Merchich / Sahara Sud",
    "+proj=lcc +lat_1=22.5 +lat_0=22.5 +lon_0=-5.4 +k_0=0.999616437 +x_0=1500000 +y_0=400000 +a=6378249.2 +b=6356515 +towgs84=31,146,47,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26237": [
    "Massawa / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=bessel +towgs84=639,405,60,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26331": [
    "Minna / UTM zone 31N",
    "+proj=utm +zone=31 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26332": [
    "Minna / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26391": [
    "Minna / Nigeria West Belt",
    "+proj=tmerc +lat_0=4 +lon_0=4.5 +k=0.99975 +x_0=230738.26 +y_0=0 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26392": [
    "Minna / Nigeria Mid Belt",
    "+proj=tmerc +lat_0=4 +lon_0=8.5 +k=0.99975 +x_0=670553.98 +y_0=0 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26393": [
    "Minna / Nigeria East Belt",
    "+proj=tmerc +lat_0=4 +lon_0=12.5 +k=0.99975 +x_0=1110369.7 +y_0=0 +ellps=clrk80 +towgs84=-92,-93,122,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26432": [
    "Mhast / UTM zone 32S (deprecated)",
    "+proj=utm +zone=32 +south +ellps=intl +towgs84=-252.95,-4.11,-96.38,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26591": [
    "Monte Mario (Rome) / Italy zone 1 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-3.45233333333333 +k=0.9996 +x_0=1500000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +pm=rome +units=m +no_defs ",
  ],
  "EPSG:26592": [
    "Monte Mario (Rome) / Italy zone 2 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=2.54766666666666 +k=0.9996 +x_0=2520000 +y_0=0 +ellps=intl +towgs84=-104.1,-49.1,-9.9,0.971,-2.917,0.714,-11.68 +pm=rome +units=m +no_defs ",
  ],
  "EPSG:26632": [
    "Mporaloko / UTM zone 32N",
    "+proj=utm +zone=32 +a=6378249.2 +b=6356515 +towgs84=-74,-130,42,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26692": [
    "Mporaloko / UTM zone 32S",
    "+proj=utm +zone=32 +south +a=6378249.2 +b=6356515 +towgs84=-74,-130,42,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26701": [
    "NAD27 / UTM zone 1N",
    "+proj=utm +zone=1 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26702": [
    "NAD27 / UTM zone 2N",
    "+proj=utm +zone=2 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26703": [
    "NAD27 / UTM zone 3N",
    "+proj=utm +zone=3 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26704": [
    "NAD27 / UTM zone 4N",
    "+proj=utm +zone=4 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26705": [
    "NAD27 / UTM zone 5N",
    "+proj=utm +zone=5 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26706": [
    "NAD27 / UTM zone 6N",
    "+proj=utm +zone=6 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26713": [
    "NAD27 / UTM zone 13N",
    "+proj=utm +zone=13 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26714": [
    "NAD27 / UTM zone 14N",
    "+proj=utm +zone=14 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26715": [
    "NAD27 / UTM zone 15N",
    "+proj=utm +zone=15 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26716": [
    "NAD27 / UTM zone 16N",
    "+proj=utm +zone=16 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26717": [
    "NAD27 / UTM zone 17N",
    "+proj=utm +zone=17 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26718": [
    "NAD27 / UTM zone 18N",
    "+proj=utm +zone=18 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26719": [
    "NAD27 / UTM zone 19N",
    "+proj=utm +zone=19 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26720": [
    "NAD27 / UTM zone 20N",
    "+proj=utm +zone=20 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26721": [
    "NAD27 / UTM zone 21N",
    "+proj=utm +zone=21 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26722": [
    "NAD27 / UTM zone 22N",
    "+proj=utm +zone=22 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:26729": [
    "NAD27 / Alabama East",
    "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26730": [
    "NAD27 / Alabama West",
    "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26731": [
    "NAD27 / Alaska zone 1",
    "+proj=omerc +lat_0=57 +lonc=-133.6666666666667 +alpha=323.1301023611111 +k=0.9999 +x_0=5000000.001016002 +y_0=-5000000.001016002 +gamma=323.1301023611111 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26732": [
    "NAD27 / Alaska zone 2",
    "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26733": [
    "NAD27 / Alaska zone 3",
    "+proj=tmerc +lat_0=54 +lon_0=-146 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26734": [
    "NAD27 / Alaska zone 4",
    "+proj=tmerc +lat_0=54 +lon_0=-150 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26735": [
    "NAD27 / Alaska zone 5",
    "+proj=tmerc +lat_0=54 +lon_0=-154 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26736": [
    "NAD27 / Alaska zone 6",
    "+proj=tmerc +lat_0=54 +lon_0=-158 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26737": [
    "NAD27 / Alaska zone 7",
    "+proj=tmerc +lat_0=54 +lon_0=-162 +k=0.9999 +x_0=213360.4267208534 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26738": [
    "NAD27 / Alaska zone 8",
    "+proj=tmerc +lat_0=54 +lon_0=-166 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:31028": [
    "Yoff / UTM zone 28N",
    "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:26739": [
    "NAD27 / Alaska zone 9",
    "+proj=tmerc +lat_0=54 +lon_0=-170 +k=0.9999 +x_0=182880.3657607315 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26740": [
    "NAD27 / Alaska zone 10",
    "+proj=lcc +lat_1=53.83333333333334 +lat_2=51.83333333333334 +lat_0=51 +lon_0=-176 +x_0=914401.8288036576 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26741": [
    "NAD27 / California zone I",
    "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26742": [
    "NAD27 / California zone II",
    "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26743": [
    "NAD27 / California zone III",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26744": [
    "NAD27 / California zone IV",
    "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26745": [
    "NAD27 / California zone V",
    "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26746": [
    "NAD27 / California zone VI",
    "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26893": [
    "NAD83(CSRS) / MTM zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=-84 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26747": [
    "NAD27 / California zone VII (deprecated)",
    "+proj=lcc +lat_1=34.41666666666666 +lat_2=33.86666666666667 +lat_0=34.13333333333333 +lon_0=-118.3333333333333 +x_0=1276106.450596901 +y_0=127079.524511049 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26748": [
    "NAD27 / Arizona East",
    "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26749": [
    "NAD27 / Arizona Central",
    "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26750": [
    "NAD27 / Arizona West",
    "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26751": [
    "NAD27 / Arkansas North",
    "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26752": [
    "NAD27 / Arkansas South",
    "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26753": [
    "NAD27 / Colorado North",
    "+proj=lcc +lat_1=39.71666666666667 +lat_2=40.78333333333333 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26754": [
    "NAD27 / Colorado Central",
    "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26769": [
    "NAD27 / Idaho Central",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26755": [
    "NAD27 / Colorado South",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26756": [
    "NAD27 / Connecticut",
    "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=182880.3657607315 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26757": [
    "NAD27 / Delaware",
    "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26758": [
    "NAD27 / Florida East",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26759": [
    "NAD27 / Florida West",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26760": [
    "NAD27 / Florida North",
    "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26766": [
    "NAD27 / Georgia East",
    "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26767": [
    "NAD27 / Georgia West",
    "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26768": [
    "NAD27 / Idaho East",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26770": [
    "NAD27 / Idaho West",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26771": [
    "NAD27 / Illinois East",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26772": [
    "NAD27 / Illinois West",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26773": [
    "NAD27 / Indiana East",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26774": [
    "NAD27 / Indiana West",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26775": [
    "NAD27 / Iowa North",
    "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26776": [
    "NAD27 / Iowa South",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26777": [
    "NAD27 / Kansas North",
    "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26778": [
    "NAD27 / Kansas South",
    "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26779": [
    "NAD27 / Kentucky North",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=38.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26780": [
    "NAD27 / Kentucky South",
    "+proj=lcc +lat_1=36.73333333333333 +lat_2=37.93333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26781": [
    "NAD27 / Louisiana North",
    "+proj=lcc +lat_1=31.16666666666667 +lat_2=32.66666666666666 +lat_0=30.66666666666667 +lon_0=-92.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26782": [
    "NAD27 / Louisiana South",
    "+proj=lcc +lat_1=29.3 +lat_2=30.7 +lat_0=28.66666666666667 +lon_0=-91.33333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26783": [
    "NAD27 / Maine East",
    "+proj=tmerc +lat_0=43.83333333333334 +lon_0=-68.5 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26784": [
    "NAD27 / Maine West",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26785": [
    "NAD27 / Maryland",
    "+proj=lcc +lat_1=38.3 +lat_2=39.45 +lat_0=37.83333333333334 +lon_0=-77 +x_0=243840.4876809754 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26786": [
    "NAD27 / Massachusetts Mainland",
    "+proj=lcc +lat_1=41.71666666666667 +lat_2=42.68333333333333 +lat_0=41 +lon_0=-71.5 +x_0=182880.3657607315 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26892": [
    "NAD83(CSRS) / MTM zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26787": [
    "NAD27 / Massachusetts Island",
    "+proj=lcc +lat_1=41.28333333333333 +lat_2=41.48333333333333 +lat_0=41 +lon_0=-70.5 +x_0=60960.12192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26791": [
    "NAD27 / Minnesota North",
    "+proj=lcc +lat_1=47.03333333333333 +lat_2=48.63333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26792": [
    "NAD27 / Minnesota Central",
    "+proj=lcc +lat_1=45.61666666666667 +lat_2=47.05 +lat_0=45 +lon_0=-94.25 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26793": [
    "NAD27 / Minnesota South",
    "+proj=lcc +lat_1=43.78333333333333 +lat_2=45.21666666666667 +lat_0=43 +lon_0=-94 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26794": [
    "NAD27 / Mississippi East",
    "+proj=tmerc +lat_0=29.66666666666667 +lon_0=-88.83333333333333 +k=0.99996 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26795": [
    "NAD27 / Mississippi West",
    "+proj=tmerc +lat_0=30.5 +lon_0=-90.33333333333333 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26796": [
    "NAD27 / Missouri East",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26797": [
    "NAD27 / Missouri Central",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26798": [
    "NAD27 / Missouri West",
    "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26799": [
    "NAD27 / California zone VII",
    "+proj=lcc +lat_1=34.41666666666666 +lat_2=33.86666666666667 +lat_0=34.13333333333333 +lon_0=-118.3333333333333 +x_0=1276106.450596901 +y_0=1268253.006858014 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:26801": [
    "NAD Michigan / Michigan East",
    "+proj=tmerc +lat_0=41.5 +lon_0=-83.66666666666667 +k=0.999942857 +x_0=152400.3048006096 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs ",
  ],
  "EPSG:26802": [
    "NAD Michigan / Michigan Old Central",
    "+proj=tmerc +lat_0=41.5 +lon_0=-85.75 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs ",
  ],
  "EPSG:26803": [
    "NAD Michigan / Michigan West",
    "+proj=tmerc +lat_0=41.5 +lon_0=-88.75 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs ",
  ],
  "EPSG:26811": [
    "NAD Michigan / Michigan North",
    "+proj=lcc +lat_1=45.48333333333333 +lat_2=47.08333333333334 +lat_0=44.78333333333333 +lon_0=-87 +x_0=609601.2192024384 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs ",
  ],
  "EPSG:26812": [
    "NAD Michigan / Michigan Central",
    "+proj=lcc +lat_1=44.18333333333333 +lat_2=45.7 +lat_0=43.31666666666667 +lon_0=-84.33333333333333 +x_0=609601.2192024384 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs ",
  ],
  "EPSG:26813": [
    "NAD Michigan / Michigan South",
    "+proj=lcc +lat_1=42.1 +lat_2=43.66666666666666 +lat_0=41.5 +lon_0=-84.33333333333333 +x_0=609601.2192024384 +y_0=0 +a=6378450.047548896 +b=6356826.621488444 +units=us-ft +no_defs ",
  ],
  "EPSG:26814": [
    "NAD83 / Maine East (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26815": [
    "NAD83 / Maine West (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26819": [
    "NAD83 / Minnesota North (ftUS) (deprecated)",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26820": [
    "NAD83 / Minnesota Central (ftUS) (deprecated)",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26821": [
    "NAD83 / Minnesota South (ftUS) (deprecated)",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26822": [
    "NAD83 / Nebraska (ftUS) (deprecated)",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.0000101601 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26823": [
    "NAD83 / West Virginia North (ftUS) (deprecated)",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26824": [
    "NAD83 / West Virginia South (ftUS) (deprecated)",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26825": [
    "NAD83(HARN) / Maine East (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26826": [
    "NAD83(HARN) / Maine West (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26830": [
    "NAD83(HARN) / Minnesota North (ftUS) (deprecated)",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26831": [
    "NAD83(HARN) / Minnesota Central (ftUS) (deprecated)",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26832": [
    "NAD83(HARN) / Minnesota South (ftUS) (deprecated)",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26833": [
    "NAD83(HARN) / Nebraska (ftUS) (deprecated)",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.0000101601 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26834": [
    "NAD83(HARN) / West Virginia North (ftUS) (deprecated)",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26835": [
    "NAD83(HARN) / West Virginia South (ftUS) (deprecated)",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26836": [
    "NAD83(NSRS2007) / Maine East (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26837": [
    "NAD83(NSRS2007) / Maine West (ftUS) (deprecated)",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26841": [
    "NAD83(NSRS2007) / Minnesota North (ftUS) (deprecated)",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26842": [
    "NAD83(NSRS2007) / Minnesota Central (ftUS) (deprecated)",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26843": [
    "NAD83(NSRS2007) / Minnesota South (ftUS) (deprecated)",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101601 +y_0=99999.99998984 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26844": [
    "NAD83(NSRS2007) / Nebraska (ftUS) (deprecated)",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.0000101601 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26845": [
    "NAD83(NSRS2007) / West Virginia North (ftUS) (deprecated)",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26846": [
    "NAD83(NSRS2007) / West Virginia South (ftUS) (deprecated)",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=1968500 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26847": [
    "NAD83 / Maine East (ftUS)",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26848": [
    "NAD83 / Maine West (ftUS)",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26849": [
    "NAD83 / Minnesota North (ftUS)",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26850": [
    "NAD83 / Minnesota Central (ftUS)",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26851": [
    "NAD83 / Minnesota South (ftUS)",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26852": [
    "NAD83 / Nebraska (ftUS)",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26853": [
    "NAD83 / West Virginia North (ftUS)",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26854": [
    "NAD83 / West Virginia South (ftUS)",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26855": [
    "NAD83(HARN) / Maine East (ftUS)",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26856": [
    "NAD83(HARN) / Maine West (ftUS)",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26857": [
    "NAD83(HARN) / Minnesota North (ftUS)",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26858": [
    "NAD83(HARN) / Minnesota Central (ftUS)",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26859": [
    "NAD83(HARN) / Minnesota South (ftUS)",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26860": [
    "NAD83(HARN) / Nebraska (ftUS)",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26861": [
    "NAD83(HARN) / West Virginia North (ftUS)",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26862": [
    "NAD83(HARN) / West Virginia South (ftUS)",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26863": [
    "NAD83(NSRS2007) / Maine East (ftUS)",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000.0000000001 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26864": [
    "NAD83(NSRS2007) / Maine West (ftUS)",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26865": [
    "NAD83(NSRS2007) / Minnesota North (ftUS)",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26866": [
    "NAD83(NSRS2007) / Minnesota Central (ftUS)",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26867": [
    "NAD83(NSRS2007) / Minnesota South (ftUS)",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000.0000101599 +y_0=99999.99998983997 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26868": [
    "NAD83(NSRS2007) / Nebraska (ftUS)",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000.00001016 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26869": [
    "NAD83(NSRS2007) / West Virginia North (ftUS)",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26870": [
    "NAD83(NSRS2007) / West Virginia South (ftUS)",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:26891": [
    "NAD83(CSRS) / MTM zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=-82.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26894": [
    "NAD83(CSRS) / MTM zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26895": [
    "NAD83(CSRS) / MTM zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26896": [
    "NAD83(CSRS) / MTM zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26897": [
    "NAD83(CSRS) / MTM zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=-96 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26898": [
    "NAD83(CSRS) / MTM zone 1",
    "+proj=tmerc +lat_0=0 +lon_0=-53 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26899": [
    "NAD83(CSRS) / MTM zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=-56 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26901": [
    "NAD83 / UTM zone 1N",
    "+proj=utm +zone=1 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26902": [
    "NAD83 / UTM zone 2N",
    "+proj=utm +zone=2 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26903": [
    "NAD83 / UTM zone 3N",
    "+proj=utm +zone=3 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26904": [
    "NAD83 / UTM zone 4N",
    "+proj=utm +zone=4 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26905": [
    "NAD83 / UTM zone 5N",
    "+proj=utm +zone=5 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26906": [
    "NAD83 / UTM zone 6N",
    "+proj=utm +zone=6 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26907": [
    "NAD83 / UTM zone 7N",
    "+proj=utm +zone=7 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26908": [
    "NAD83 / UTM zone 8N",
    "+proj=utm +zone=8 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26909": [
    "NAD83 / UTM zone 9N",
    "+proj=utm +zone=9 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26910": [
    "NAD83 / UTM zone 10N",
    "+proj=utm +zone=10 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26911": [
    "NAD83 / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26912": [
    "NAD83 / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26913": [
    "NAD83 / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26914": [
    "NAD83 / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26915": [
    "NAD83 / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26916": [
    "NAD83 / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26917": [
    "NAD83 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26918": [
    "NAD83 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26919": [
    "NAD83 / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26920": [
    "NAD83 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26921": [
    "NAD83 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26922": [
    "NAD83 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26923": [
    "NAD83 / UTM zone 23N",
    "+proj=utm +zone=23 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26929": [
    "NAD83 / Alabama East",
    "+proj=tmerc +lat_0=30.5 +lon_0=-85.83333333333333 +k=0.99996 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26930": [
    "NAD83 / Alabama West",
    "+proj=tmerc +lat_0=30 +lon_0=-87.5 +k=0.999933333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26931": [
    "NAD83 / Alaska zone 1",
    "+proj=omerc +lat_0=57 +lonc=-133.6666666666667 +alpha=323.1301023611111 +k=0.9999 +x_0=5000000 +y_0=-5000000 +gamma=323.1301023611111 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26932": [
    "NAD83 / Alaska zone 2",
    "+proj=tmerc +lat_0=54 +lon_0=-142 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26933": [
    "NAD83 / Alaska zone 3",
    "+proj=tmerc +lat_0=54 +lon_0=-146 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26934": [
    "NAD83 / Alaska zone 4",
    "+proj=tmerc +lat_0=54 +lon_0=-150 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26935": [
    "NAD83 / Alaska zone 5",
    "+proj=tmerc +lat_0=54 +lon_0=-154 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26936": [
    "NAD83 / Alaska zone 6",
    "+proj=tmerc +lat_0=54 +lon_0=-158 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26937": [
    "NAD83 / Alaska zone 7",
    "+proj=tmerc +lat_0=54 +lon_0=-162 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26938": [
    "NAD83 / Alaska zone 8",
    "+proj=tmerc +lat_0=54 +lon_0=-166 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26939": [
    "NAD83 / Alaska zone 9",
    "+proj=tmerc +lat_0=54 +lon_0=-170 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26940": [
    "NAD83 / Alaska zone 10",
    "+proj=lcc +lat_1=53.83333333333334 +lat_2=51.83333333333334 +lat_0=51 +lon_0=-176 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26941": [
    "NAD83 / California zone 1",
    "+proj=lcc +lat_1=41.66666666666666 +lat_2=40 +lat_0=39.33333333333334 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26942": [
    "NAD83 / California zone 2",
    "+proj=lcc +lat_1=39.83333333333334 +lat_2=38.33333333333334 +lat_0=37.66666666666666 +lon_0=-122 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26943": [
    "NAD83 / California zone 3",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.06666666666667 +lat_0=36.5 +lon_0=-120.5 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26944": [
    "NAD83 / California zone 4",
    "+proj=lcc +lat_1=37.25 +lat_2=36 +lat_0=35.33333333333334 +lon_0=-119 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26945": [
    "NAD83 / California zone 5",
    "+proj=lcc +lat_1=35.46666666666667 +lat_2=34.03333333333333 +lat_0=33.5 +lon_0=-118 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26946": [
    "NAD83 / California zone 6",
    "+proj=lcc +lat_1=33.88333333333333 +lat_2=32.78333333333333 +lat_0=32.16666666666666 +lon_0=-116.25 +x_0=2000000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26948": [
    "NAD83 / Arizona East",
    "+proj=tmerc +lat_0=31 +lon_0=-110.1666666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31121": [
    "Zanderij / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26949": [
    "NAD83 / Arizona Central",
    "+proj=tmerc +lat_0=31 +lon_0=-111.9166666666667 +k=0.9999 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26950": [
    "NAD83 / Arizona West",
    "+proj=tmerc +lat_0=31 +lon_0=-113.75 +k=0.999933333 +x_0=213360 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26951": [
    "NAD83 / Arkansas North",
    "+proj=lcc +lat_1=36.23333333333333 +lat_2=34.93333333333333 +lat_0=34.33333333333334 +lon_0=-92 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26952": [
    "NAD83 / Arkansas South",
    "+proj=lcc +lat_1=34.76666666666667 +lat_2=33.3 +lat_0=32.66666666666666 +lon_0=-92 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26953": [
    "NAD83 / Colorado North",
    "+proj=lcc +lat_1=40.78333333333333 +lat_2=39.71666666666667 +lat_0=39.33333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26954": [
    "NAD83 / Colorado Central",
    "+proj=lcc +lat_1=39.75 +lat_2=38.45 +lat_0=37.83333333333334 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26955": [
    "NAD83 / Colorado South",
    "+proj=lcc +lat_1=38.43333333333333 +lat_2=37.23333333333333 +lat_0=36.66666666666666 +lon_0=-105.5 +x_0=914401.8289 +y_0=304800.6096 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26956": [
    "NAD83 / Connecticut",
    "+proj=lcc +lat_1=41.86666666666667 +lat_2=41.2 +lat_0=40.83333333333334 +lon_0=-72.75 +x_0=304800.6096 +y_0=152400.3048 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27038": [
    "Nahrwan 1967 / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=clrk80 +towgs84=-243,-192,477,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26957": [
    "NAD83 / Delaware",
    "+proj=tmerc +lat_0=38 +lon_0=-75.41666666666667 +k=0.999995 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26958": [
    "NAD83 / Florida East",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-81 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26959": [
    "NAD83 / Florida West",
    "+proj=tmerc +lat_0=24.33333333333333 +lon_0=-82 +k=0.999941177 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26960": [
    "NAD83 / Florida North",
    "+proj=lcc +lat_1=30.75 +lat_2=29.58333333333333 +lat_0=29 +lon_0=-84.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26961": [
    "NAD83 / Hawaii zone 1",
    "+proj=tmerc +lat_0=18.83333333333333 +lon_0=-155.5 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26962": [
    "NAD83 / Hawaii zone 2",
    "+proj=tmerc +lat_0=20.33333333333333 +lon_0=-156.6666666666667 +k=0.999966667 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26963": [
    "NAD83 / Hawaii zone 3",
    "+proj=tmerc +lat_0=21.16666666666667 +lon_0=-158 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26964": [
    "NAD83 / Hawaii zone 4",
    "+proj=tmerc +lat_0=21.83333333333333 +lon_0=-159.5 +k=0.99999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26965": [
    "NAD83 / Hawaii zone 5",
    "+proj=tmerc +lat_0=21.66666666666667 +lon_0=-160.1666666666667 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26966": [
    "NAD83 / Georgia East",
    "+proj=tmerc +lat_0=30 +lon_0=-82.16666666666667 +k=0.9999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26967": [
    "NAD83 / Georgia West",
    "+proj=tmerc +lat_0=30 +lon_0=-84.16666666666667 +k=0.9999 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26968": [
    "NAD83 / Idaho East",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-112.1666666666667 +k=0.9999473679999999 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26969": [
    "NAD83 / Idaho Central",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-114 +k=0.9999473679999999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26970": [
    "NAD83 / Idaho West",
    "+proj=tmerc +lat_0=41.66666666666666 +lon_0=-115.75 +k=0.999933333 +x_0=800000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26971": [
    "NAD83 / Illinois East",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-88.33333333333333 +k=0.9999749999999999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26972": [
    "NAD83 / Illinois West",
    "+proj=tmerc +lat_0=36.66666666666666 +lon_0=-90.16666666666667 +k=0.999941177 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26973": [
    "NAD83 / Indiana East",
    "+proj=tmerc +lat_0=37.5 +lon_0=-85.66666666666667 +k=0.999966667 +x_0=100000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26974": [
    "NAD83 / Indiana West",
    "+proj=tmerc +lat_0=37.5 +lon_0=-87.08333333333333 +k=0.999966667 +x_0=900000 +y_0=250000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26975": [
    "NAD83 / Iowa North",
    "+proj=lcc +lat_1=43.26666666666667 +lat_2=42.06666666666667 +lat_0=41.5 +lon_0=-93.5 +x_0=1500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26976": [
    "NAD83 / Iowa South",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.61666666666667 +lat_0=40 +lon_0=-93.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26977": [
    "NAD83 / Kansas North",
    "+proj=lcc +lat_1=39.78333333333333 +lat_2=38.71666666666667 +lat_0=38.33333333333334 +lon_0=-98 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26978": [
    "NAD83 / Kansas South",
    "+proj=lcc +lat_1=38.56666666666667 +lat_2=37.26666666666667 +lat_0=36.66666666666666 +lon_0=-98.5 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26979": [
    "NAD83 / Kentucky North (deprecated)",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=37.96666666666667 +lat_0=37.5 +lon_0=-84.25 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26980": [
    "NAD83 / Kentucky South",
    "+proj=lcc +lat_1=37.93333333333333 +lat_2=36.73333333333333 +lat_0=36.33333333333334 +lon_0=-85.75 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26981": [
    "NAD83 / Louisiana North",
    "+proj=lcc +lat_1=32.66666666666666 +lat_2=31.16666666666667 +lat_0=30.5 +lon_0=-92.5 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26982": [
    "NAD83 / Louisiana South",
    "+proj=lcc +lat_1=30.7 +lat_2=29.3 +lat_0=28.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26983": [
    "NAD83 / Maine East",
    "+proj=tmerc +lat_0=43.66666666666666 +lon_0=-68.5 +k=0.9999 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26984": [
    "NAD83 / Maine West",
    "+proj=tmerc +lat_0=42.83333333333334 +lon_0=-70.16666666666667 +k=0.999966667 +x_0=900000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26985": [
    "NAD83 / Maryland",
    "+proj=lcc +lat_1=39.45 +lat_2=38.3 +lat_0=37.66666666666666 +lon_0=-77 +x_0=400000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26986": [
    "NAD83 / Massachusetts Mainland",
    "+proj=lcc +lat_1=42.68333333333333 +lat_2=41.71666666666667 +lat_0=41 +lon_0=-71.5 +x_0=200000 +y_0=750000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26987": [
    "NAD83 / Massachusetts Island",
    "+proj=lcc +lat_1=41.48333333333333 +lat_2=41.28333333333333 +lat_0=41 +lon_0=-70.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26988": [
    "NAD83 / Michigan North",
    "+proj=lcc +lat_1=47.08333333333334 +lat_2=45.48333333333333 +lat_0=44.78333333333333 +lon_0=-87 +x_0=8000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26989": [
    "NAD83 / Michigan Central",
    "+proj=lcc +lat_1=45.7 +lat_2=44.18333333333333 +lat_0=43.31666666666667 +lon_0=-84.36666666666666 +x_0=6000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26990": [
    "NAD83 / Michigan South",
    "+proj=lcc +lat_1=43.66666666666666 +lat_2=42.1 +lat_0=41.5 +lon_0=-84.36666666666666 +x_0=4000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27039": [
    "Nahrwan 1967 / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=clrk80 +towgs84=-243,-192,477,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26991": [
    "NAD83 / Minnesota North",
    "+proj=lcc +lat_1=48.63333333333333 +lat_2=47.03333333333333 +lat_0=46.5 +lon_0=-93.09999999999999 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26992": [
    "NAD83 / Minnesota Central",
    "+proj=lcc +lat_1=47.05 +lat_2=45.61666666666667 +lat_0=45 +lon_0=-94.25 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26993": [
    "NAD83 / Minnesota South",
    "+proj=lcc +lat_1=45.21666666666667 +lat_2=43.78333333333333 +lat_0=43 +lon_0=-94 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26994": [
    "NAD83 / Mississippi East",
    "+proj=tmerc +lat_0=29.5 +lon_0=-88.83333333333333 +k=0.99995 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26995": [
    "NAD83 / Mississippi West",
    "+proj=tmerc +lat_0=29.5 +lon_0=-90.33333333333333 +k=0.99995 +x_0=700000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26996": [
    "NAD83 / Missouri East",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-90.5 +k=0.999933333 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26997": [
    "NAD83 / Missouri Central",
    "+proj=tmerc +lat_0=35.83333333333334 +lon_0=-92.5 +k=0.999933333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:26998": [
    "NAD83 / Missouri West",
    "+proj=tmerc +lat_0=36.16666666666666 +lon_0=-94.5 +k=0.999941177 +x_0=850000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27037": [
    "Nahrwan 1967 / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=clrk80 +towgs84=-243,-192,477,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27040": [
    "Nahrwan 1967 / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=clrk80 +towgs84=-243,-192,477,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27120": [
    "Naparima 1972 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=intl +towgs84=-10,375,165,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27200": [
    "NZGD49 / New Zealand Map Grid",
    "+proj=nzmg +lat_0=-41 +lon_0=173 +x_0=2510000 +y_0=6023150 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27205": [
    "NZGD49 / Mount Eden Circuit",
    "+proj=tmerc +lat_0=-36.87986527777778 +lon_0=174.7643393611111 +k=0.9999 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27206": [
    "NZGD49 / Bay of Plenty Circuit",
    "+proj=tmerc +lat_0=-37.76124980555556 +lon_0=176.46619725 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27207": [
    "NZGD49 / Poverty Bay Circuit",
    "+proj=tmerc +lat_0=-38.62470277777778 +lon_0=177.8856362777778 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27208": [
    "NZGD49 / Hawkes Bay Circuit",
    "+proj=tmerc +lat_0=-39.65092930555556 +lon_0=176.6736805277778 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27209": [
    "NZGD49 / Taranaki Circuit",
    "+proj=tmerc +lat_0=-39.13575830555556 +lon_0=174.22801175 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:28353": [
    "GDA94 / MGA zone 53",
    "+proj=utm +zone=53 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27210": [
    "NZGD49 / Tuhirangi Circuit",
    "+proj=tmerc +lat_0=-39.51247038888889 +lon_0=175.6400368055556 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27211": [
    "NZGD49 / Wanganui Circuit",
    "+proj=tmerc +lat_0=-40.24194713888889 +lon_0=175.4880996111111 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27212": [
    "NZGD49 / Wairarapa Circuit",
    "+proj=tmerc +lat_0=-40.92553263888889 +lon_0=175.6473496666667 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27213": [
    "NZGD49 / Wellington Circuit",
    "+proj=tmerc +lat_0=-41.30131963888888 +lon_0=174.7766231111111 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27214": [
    "NZGD49 / Collingwood Circuit",
    "+proj=tmerc +lat_0=-40.71475905555556 +lon_0=172.6720465 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27215": [
    "NZGD49 / Nelson Circuit",
    "+proj=tmerc +lat_0=-41.27454472222222 +lon_0=173.2993168055555 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27216": [
    "NZGD49 / Karamea Circuit",
    "+proj=tmerc +lat_0=-41.28991152777778 +lon_0=172.1090281944444 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27217": [
    "NZGD49 / Buller Circuit",
    "+proj=tmerc +lat_0=-41.81080286111111 +lon_0=171.5812600555556 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27218": [
    "NZGD49 / Grey Circuit",
    "+proj=tmerc +lat_0=-42.33369427777778 +lon_0=171.5497713055556 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27219": [
    "NZGD49 / Amuri Circuit",
    "+proj=tmerc +lat_0=-42.68911658333333 +lon_0=173.0101333888889 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27220": [
    "NZGD49 / Marlborough Circuit",
    "+proj=tmerc +lat_0=-41.54448666666666 +lon_0=173.8020741111111 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27221": [
    "NZGD49 / Hokitika Circuit",
    "+proj=tmerc +lat_0=-42.88632236111111 +lon_0=170.9799935 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27222": [
    "NZGD49 / Okarito Circuit",
    "+proj=tmerc +lat_0=-43.11012813888889 +lon_0=170.2609258333333 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27223": [
    "NZGD49 / Jacksons Bay Circuit",
    "+proj=tmerc +lat_0=-43.97780288888889 +lon_0=168.606267 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27224": [
    "NZGD49 / Mount Pleasant Circuit",
    "+proj=tmerc +lat_0=-43.59063758333333 +lon_0=172.7271935833333 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27225": [
    "NZGD49 / Gawler Circuit",
    "+proj=tmerc +lat_0=-43.74871155555556 +lon_0=171.3607484722222 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27226": [
    "NZGD49 / Timaru Circuit",
    "+proj=tmerc +lat_0=-44.40222036111111 +lon_0=171.0572508333333 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27227": [
    "NZGD49 / Lindis Peak Circuit",
    "+proj=tmerc +lat_0=-44.73526797222222 +lon_0=169.4677550833333 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27228": [
    "NZGD49 / Mount Nicholas Circuit",
    "+proj=tmerc +lat_0=-45.13290258333333 +lon_0=168.3986411944444 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27229": [
    "NZGD49 / Mount York Circuit",
    "+proj=tmerc +lat_0=-45.56372616666666 +lon_0=167.7388617777778 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27230": [
    "NZGD49 / Observation Point Circuit",
    "+proj=tmerc +lat_0=-45.81619661111111 +lon_0=170.6285951666667 +k=1 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27231": [
    "NZGD49 / North Taieri Circuit",
    "+proj=tmerc +lat_0=-45.86151336111111 +lon_0=170.2825891111111 +k=0.99996 +x_0=300000 +y_0=700000 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27232": [
    "NZGD49 / Bluff Circuit",
    "+proj=tmerc +lat_0=-46.60000961111111 +lon_0=168.342872 +k=1 +x_0=300002.66 +y_0=699999.58 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27258": [
    "NZGD49 / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27259": [
    "NZGD49 / UTM zone 59S",
    "+proj=utm +zone=59 +south +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27260": [
    "NZGD49 / UTM zone 60S",
    "+proj=utm +zone=60 +south +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +units=m +no_defs ",
  ],
  "EPSG:27291": [
    "NZGD49 / North Island Grid",
    "+proj=tmerc +lat_0=-39 +lon_0=175.5 +k=1 +x_0=274319.5243848086 +y_0=365759.3658464114 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +to_meter=0.9143984146160287 +no_defs ",
  ],
  "EPSG:27292": [
    "NZGD49 / South Island Grid",
    "+proj=tmerc +lat_0=-44 +lon_0=171.5 +k=1 +x_0=457199.2073080143 +y_0=457199.2073080143 +ellps=intl +towgs84=59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993 +nadgrids=nzgd2kgrid0005.gsb +to_meter=0.9143984146160287 +no_defs ",
  ],
  "EPSG:27391": [
    "NGO 1948 (Oslo) / NGO zone I",
    "+proj=tmerc +lat_0=58 +lon_0=-4.666666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:27392": [
    "NGO 1948 (Oslo) / NGO zone II",
    "+proj=tmerc +lat_0=58 +lon_0=-2.333333333333333 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:27393": [
    "NGO 1948 (Oslo) / NGO zone III",
    "+proj=tmerc +lat_0=58 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:27394": [
    "NGO 1948 (Oslo) / NGO zone IV",
    "+proj=tmerc +lat_0=58 +lon_0=2.5 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:28354": [
    "GDA94 / MGA zone 54",
    "+proj=utm +zone=54 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27395": [
    "NGO 1948 (Oslo) / NGO zone V",
    "+proj=tmerc +lat_0=58 +lon_0=6.166666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:27396": [
    "NGO 1948 (Oslo) / NGO zone VI",
    "+proj=tmerc +lat_0=58 +lon_0=10.16666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:27397": [
    "NGO 1948 (Oslo) / NGO zone VII",
    "+proj=tmerc +lat_0=58 +lon_0=14.16666666666667 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:27398": [
    "NGO 1948 (Oslo) / NGO zone VIII",
    "+proj=tmerc +lat_0=58 +lon_0=18.33333333333333 +k=1 +x_0=0 +y_0=0 +a=6377492.018 +b=6356173.508712696 +towgs84=278.3,93,474.5,7.889,0.05,-6.61,6.21 +pm=oslo +units=m +no_defs ",
  ],
  "EPSG:27429": [
    "Datum 73 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27492": [
    "Datum 73 / Modified Portuguese Grid (deprecated)",
    "+proj=tmerc +lat_0=39.66666666666666 +lon_0=-8.131906111111112 +k=1 +x_0=180.598 +y_0=-86.98999999999999 +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27493": [
    "Datum 73 / Modified Portuguese Grid",
    "+proj=tmerc +lat_0=39.66666666666666 +lon_0=-8.131906111111112 +k=1 +x_0=180.598 +y_0=-86.98999999999999 +ellps=intl +towgs84=-223.237,110.193,36.649,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:27500": [
    "ATF (Paris) / Nord de Guerre",
    "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=5.399999999999999 +k_0=0.99950908 +x_0=500000 +y_0=300000 +a=6376523 +b=6355862.933255573 +pm=2.337208333333333 +units=m +no_defs ",
  ],
  "EPSG:27561": [
    "NTF (Paris) / Lambert Nord France",
    "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27562": [
    "NTF (Paris) / Lambert Centre France",
    "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27563": [
    "NTF (Paris) / Lambert Sud France",
    "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27564": [
    "NTF (Paris) / Lambert Corse",
    "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27571": [
    "NTF (Paris) / Lambert zone I",
    "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=1200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27572": [
    "NTF (Paris) / Lambert zone II",
    "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27573": [
    "NTF (Paris) / Lambert zone III",
    "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27574": [
    "NTF (Paris) / Lambert zone IV",
    "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=4185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27581": [
    "NTF (Paris) / France I (deprecated)",
    "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=1200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27582": [
    "NTF (Paris) / France II (deprecated)",
    "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=2200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27583": [
    "NTF (Paris) / France III (deprecated)",
    "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=3200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27584": [
    "NTF (Paris) / France IV (deprecated)",
    "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=4185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27591": [
    "NTF (Paris) / Nord France (deprecated)",
    "+proj=lcc +lat_1=49.50000000000001 +lat_0=49.50000000000001 +lon_0=0 +k_0=0.999877341 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27592": [
    "NTF (Paris) / Centre France (deprecated)",
    "+proj=lcc +lat_1=46.8 +lat_0=46.8 +lon_0=0 +k_0=0.99987742 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27593": [
    "NTF (Paris) / Sud France (deprecated)",
    "+proj=lcc +lat_1=44.10000000000001 +lat_0=44.10000000000001 +lon_0=0 +k_0=0.999877499 +x_0=600000 +y_0=200000 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27594": [
    "NTF (Paris) / Corse (deprecated)",
    "+proj=lcc +lat_1=42.16500000000001 +lat_0=42.16500000000001 +lon_0=0 +k_0=0.99994471 +x_0=234.358 +y_0=185861.369 +a=6378249.2 +b=6356515 +towgs84=-168,-60,320,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:27700": [
    "OSGB 1936 / British National Grid",
    "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs ",
  ],
  "EPSG:28191": [
    "Palestine 1923 / Palestine Grid",
    "+proj=cass +lat_0=31.73409694444445 +lon_0=35.21208055555556 +x_0=170251.555 +y_0=126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.722,94.7824,340.894,-8.001,-4.42,-11.821,1 +units=m +no_defs ",
  ],
  "EPSG:28192": [
    "Palestine 1923 / Palestine Belt",
    "+proj=tmerc +lat_0=31.73409694444445 +lon_0=35.21208055555556 +k=1 +x_0=170251.555 +y_0=1126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.722,94.7824,340.894,-8.001,-4.42,-11.821,1 +units=m +no_defs ",
  ],
  "EPSG:28193": [
    "Palestine 1923 / Israeli CS Grid",
    "+proj=cass +lat_0=31.73409694444445 +lon_0=35.21208055555556 +x_0=170251.555 +y_0=1126867.909 +a=6378300.789 +b=6356566.435 +towgs84=-275.722,94.7824,340.894,-8.001,-4.42,-11.821,1 +units=m +no_defs ",
  ],
  "EPSG:28232": [
    "Pointe Noire / UTM zone 32S",
    "+proj=utm +zone=32 +south +a=6378249.2 +b=6356515 +towgs84=-148,51,-291,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28348": [
    "GDA94 / MGA zone 48",
    "+proj=utm +zone=48 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28349": [
    "GDA94 / MGA zone 49",
    "+proj=utm +zone=49 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28350": [
    "GDA94 / MGA zone 50",
    "+proj=utm +zone=50 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28351": [
    "GDA94 / MGA zone 51",
    "+proj=utm +zone=51 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28352": [
    "GDA94 / MGA zone 52",
    "+proj=utm +zone=52 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28355": [
    "GDA94 / MGA zone 55",
    "+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28356": [
    "GDA94 / MGA zone 56",
    "+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28357": [
    "GDA94 / MGA zone 57",
    "+proj=utm +zone=57 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28358": [
    "GDA94 / MGA zone 58",
    "+proj=utm +zone=58 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28402": [
    "Pulkovo 1942 / Gauss-Kruger zone 2 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=2500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28403": [
    "Pulkovo 1942 / Gauss-Kruger zone 3 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=3500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28404": [
    "Pulkovo 1942 / Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=4500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28405": [
    "Pulkovo 1942 / Gauss-Kruger zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=5500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28406": [
    "Pulkovo 1942 / Gauss-Kruger zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=6500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:29119": [
    "SAD69 / UTM zone 19N (deprecated)",
    "+proj=utm +zone=19 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28407": [
    "Pulkovo 1942 / Gauss-Kruger zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=7500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28408": [
    "Pulkovo 1942 / Gauss-Kruger zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=8500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28409": [
    "Pulkovo 1942 / Gauss-Kruger zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=9500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28410": [
    "Pulkovo 1942 / Gauss-Kruger zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=10500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28411": [
    "Pulkovo 1942 / Gauss-Kruger zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=11500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28412": [
    "Pulkovo 1942 / Gauss-Kruger zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=12500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28413": [
    "Pulkovo 1942 / Gauss-Kruger zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28414": [
    "Pulkovo 1942 / Gauss-Kruger zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28415": [
    "Pulkovo 1942 / Gauss-Kruger zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28416": [
    "Pulkovo 1942 / Gauss-Kruger zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28417": [
    "Pulkovo 1942 / Gauss-Kruger zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28418": [
    "Pulkovo 1942 / Gauss-Kruger zone 18",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28419": [
    "Pulkovo 1942 / Gauss-Kruger zone 19",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28420": [
    "Pulkovo 1942 / Gauss-Kruger zone 20",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28421": [
    "Pulkovo 1942 / Gauss-Kruger zone 21",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28422": [
    "Pulkovo 1942 / Gauss-Kruger zone 22",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28423": [
    "Pulkovo 1942 / Gauss-Kruger zone 23",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28424": [
    "Pulkovo 1942 / Gauss-Kruger zone 24",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=24500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28425": [
    "Pulkovo 1942 / Gauss-Kruger zone 25",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28426": [
    "Pulkovo 1942 / Gauss-Kruger zone 26",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28427": [
    "Pulkovo 1942 / Gauss-Kruger zone 27",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28428": [
    "Pulkovo 1942 / Gauss-Kruger zone 28",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28429": [
    "Pulkovo 1942 / Gauss-Kruger zone 29",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28430": [
    "Pulkovo 1942 / Gauss-Kruger zone 30",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28431": [
    "Pulkovo 1942 / Gauss-Kruger zone 31",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28432": [
    "Pulkovo 1942 / Gauss-Kruger zone 32",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28462": [
    "Pulkovo 1942 / Gauss-Kruger 2N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28463": [
    "Pulkovo 1942 / Gauss-Kruger 3N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28464": [
    "Pulkovo 1942 / Gauss-Kruger 4N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28465": [
    "Pulkovo 1942 / Gauss-Kruger 5N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=27 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28466": [
    "Pulkovo 1942 / Gauss-Kruger 6N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=33 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28467": [
    "Pulkovo 1942 / Gauss-Kruger 7N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=39 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28468": [
    "Pulkovo 1942 / Gauss-Kruger 8N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=45 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28469": [
    "Pulkovo 1942 / Gauss-Kruger 9N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=51 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28470": [
    "Pulkovo 1942 / Gauss-Kruger 10N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=57 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28471": [
    "Pulkovo 1942 / Gauss-Kruger 11N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=63 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28472": [
    "Pulkovo 1942 / Gauss-Kruger 12N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=69 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28473": [
    "Pulkovo 1942 / Gauss-Kruger 13N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28474": [
    "Pulkovo 1942 / Gauss-Kruger 14N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28475": [
    "Pulkovo 1942 / Gauss-Kruger 15N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28476": [
    "Pulkovo 1942 / Gauss-Kruger 16N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28477": [
    "Pulkovo 1942 / Gauss-Kruger 17N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28478": [
    "Pulkovo 1942 / Gauss-Kruger 18N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28479": [
    "Pulkovo 1942 / Gauss-Kruger 19N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28480": [
    "Pulkovo 1942 / Gauss-Kruger 20N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28481": [
    "Pulkovo 1942 / Gauss-Kruger 21N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28482": [
    "Pulkovo 1942 / Gauss-Kruger 22N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28483": [
    "Pulkovo 1942 / Gauss-Kruger 23N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28484": [
    "Pulkovo 1942 / Gauss-Kruger 24N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=141 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28485": [
    "Pulkovo 1942 / Gauss-Kruger 25N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=147 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28486": [
    "Pulkovo 1942 / Gauss-Kruger 26N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=153 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28487": [
    "Pulkovo 1942 / Gauss-Kruger 27N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=159 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28488": [
    "Pulkovo 1942 / Gauss-Kruger 28N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=165 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28489": [
    "Pulkovo 1942 / Gauss-Kruger 29N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28490": [
    "Pulkovo 1942 / Gauss-Kruger 30N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28491": [
    "Pulkovo 1942 / Gauss-Kruger 31N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-177 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28492": [
    "Pulkovo 1942 / Gauss-Kruger 32N (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-171 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=23.92,-141.27,-80.9,-0,0.35,0.82,-0.12 +units=m +no_defs ",
  ],
  "EPSG:28600": [
    "Qatar 1974 / Qatar National Grid",
    "+proj=tmerc +lat_0=24.45 +lon_0=51.21666666666667 +k=0.99999 +x_0=200000 +y_0=300000 +ellps=intl +towgs84=-128,-283,22,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:28991": [
    "Amersfoort / RD Old",
    "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=0 +y_0=0 +ellps=bessel +towgs84=565.417,50.3319,465.552,-0.398957,0.343988,-1.8774,4.0725 +units=m +no_defs ",
  ],
  "EPSG:28992": [
    "Amersfoort / RD New",
    "+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.417,50.3319,465.552,-0.398957,0.343988,-1.8774,4.0725 +units=m +no_defs ",
  ],
  "EPSG:29100": [
    "SAD69 / Brazil Polyconic (deprecated)",
    "+proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29101": [
    "SAD69 / Brazil Polyconic",
    "+proj=poly +lat_0=0 +lon_0=-54 +x_0=5000000 +y_0=10000000 +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29118": [
    "SAD69 / UTM zone 18N (deprecated)",
    "+proj=utm +zone=18 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29120": [
    "SAD69 / UTM zone 20N (deprecated)",
    "+proj=utm +zone=20 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29121": [
    "SAD69 / UTM zone 21N (deprecated)",
    "+proj=utm +zone=21 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29122": [
    "SAD69 / UTM zone 22N (deprecated)",
    "+proj=utm +zone=22 +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29168": [
    "SAD69 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29169": [
    "SAD69 / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29170": [
    "SAD69 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29171": [
    "SAD69 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29172": [
    "SAD69 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29177": [
    "SAD69 / UTM zone 17S (deprecated)",
    "+proj=utm +zone=17 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29178": [
    "SAD69 / UTM zone 18S (deprecated)",
    "+proj=utm +zone=18 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29179": [
    "SAD69 / UTM zone 19S (deprecated)",
    "+proj=utm +zone=19 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29180": [
    "SAD69 / UTM zone 20S (deprecated)",
    "+proj=utm +zone=20 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29181": [
    "SAD69 / UTM zone 21S (deprecated)",
    "+proj=utm +zone=21 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29182": [
    "SAD69 / UTM zone 22S (deprecated)",
    "+proj=utm +zone=22 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29183": [
    "SAD69 / UTM zone 23S (deprecated)",
    "+proj=utm +zone=23 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29184": [
    "SAD69 / UTM zone 24S (deprecated)",
    "+proj=utm +zone=24 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29185": [
    "SAD69 / UTM zone 25S (deprecated)",
    "+proj=utm +zone=25 +south +ellps=GRS67 +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29187": [
    "SAD69 / UTM zone 17S",
    "+proj=utm +zone=17 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29188": [
    "SAD69 / UTM zone 18S",
    "+proj=utm +zone=18 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29189": [
    "SAD69 / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29190": [
    "SAD69 / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29191": [
    "SAD69 / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29192": [
    "SAD69 / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29193": [
    "SAD69 / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29194": [
    "SAD69 / UTM zone 24S",
    "+proj=utm +zone=24 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29195": [
    "SAD69 / UTM zone 25S",
    "+proj=utm +zone=25 +south +ellps=aust_SA +towgs84=-57,1,-41,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29220": [
    "Sapper Hill 1943 / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=intl +towgs84=-355,21,72,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29221": [
    "Sapper Hill 1943 / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=intl +towgs84=-355,21,72,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29333": [
    "Schwarzeck / UTM zone 33S",
    "+proj=utm +zone=33 +south +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29371": [
    "Schwarzeck / Lo22/11",
    "+proj=tmerc +lat_0=-22 +lon_0=11 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29373": [
    "Schwarzeck / Lo22/13",
    "+proj=tmerc +lat_0=-22 +lon_0=13 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29375": [
    "Schwarzeck / Lo22/15",
    "+proj=tmerc +lat_0=-22 +lon_0=15 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29377": [
    "Schwarzeck / Lo22/17",
    "+proj=tmerc +lat_0=-22 +lon_0=17 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29379": [
    "Schwarzeck / Lo22/19",
    "+proj=tmerc +lat_0=-22 +lon_0=19 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29381": [
    "Schwarzeck / Lo22/21",
    "+proj=tmerc +lat_0=-22 +lon_0=21 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29383": [
    "Schwarzeck / Lo22/23",
    "+proj=tmerc +lat_0=-22 +lon_0=23 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29385": [
    "Schwarzeck / Lo22/25",
    "+proj=tmerc +lat_0=-22 +lon_0=25 +k=1 +x_0=0 +y_0=0 +axis=wsu +ellps=bess_nam +towgs84=616,97,-251,0,0,0,0 +to_meter=1.0000135965 +no_defs ",
  ],
  "EPSG:29635": [
    "Sudan / UTM zone 35N (deprecated)",
    "+proj=utm +zone=35 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:29636": [
    "Sudan / UTM zone 36N (deprecated)",
    "+proj=utm +zone=36 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:29700": [
    "Tananarive (Paris) / Laborde Grid (deprecated)",
    "+proj=omerc +lat_0=-18.9 +lonc=44.10000000000001 +alpha=18.9 +k=0.9995000000000001 +x_0=400000 +y_0=800000 +gamma=18.9 +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:29701": ["Tananarive (Paris) / Laborde Grid", ""],
  "EPSG:29702": [
    "Tananarive (Paris) / Laborde Grid approximation",
    "+proj=omerc +lat_0=-18.9 +lonc=44.10000000000001 +alpha=18.9 +k=0.9995000000000001 +x_0=400000 +y_0=800000 +gamma=18.9 +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +pm=paris +units=m +no_defs ",
  ],
  "EPSG:29738": [
    "Tananarive / UTM zone 38S",
    "+proj=utm +zone=38 +south +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29739": [
    "Tananarive / UTM zone 39S",
    "+proj=utm +zone=39 +south +ellps=intl +towgs84=-189,-242,-91,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29849": [
    "Timbalai 1948 / UTM zone 49N",
    "+proj=utm +zone=49 +ellps=evrstSS +towgs84=-533.4,669.2,-52.5,0,0,4.28,9.4 +units=m +no_defs ",
  ],
  "EPSG:29850": [
    "Timbalai 1948 / UTM zone 50N",
    "+proj=utm +zone=50 +ellps=evrstSS +towgs84=-533.4,669.2,-52.5,0,0,4.28,9.4 +units=m +no_defs ",
  ],
  "EPSG:29871": [
    "Timbalai 1948 / RSO Borneo (ch)",
    "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31582047222222 +k=0.99984 +x_0=590476.8714630401 +y_0=442857.653094361 +gamma=53.13010236111111 +ellps=evrstSS +towgs84=-533.4,669.2,-52.5,0,0,4.28,9.4 +to_meter=20.11676512155263 +no_defs ",
  ],
  "EPSG:30164": [
    "Tokyo / Japan Plane Rectangular CS IV",
    "+proj=tmerc +lat_0=33 +lon_0=133.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:29872": [
    "Timbalai 1948 / RSO Borneo (ft)",
    "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31582047222222 +k=0.99984 +x_0=590476.8727431979 +y_0=442857.6545573985 +gamma=53.13010236111111 +ellps=evrstSS +towgs84=-533.4,669.2,-52.5,0,0,4.28,9.4 +to_meter=0.3047994715386762 +no_defs ",
  ],
  "EPSG:29873": [
    "Timbalai 1948 / RSO Borneo (m)",
    "+proj=omerc +lat_0=4 +lonc=115 +alpha=53.31582047222222 +k=0.99984 +x_0=590476.87 +y_0=442857.65 +gamma=53.13010236111111 +ellps=evrstSS +towgs84=-533.4,669.2,-52.5,0,0,4.28,9.4 +units=m +no_defs ",
  ],
  "EPSG:29900": [
    "TM65 / Irish National Grid (deprecated)",
    "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs ",
  ],
  "EPSG:29901": [
    "OSNI 1952 / Irish National Grid",
    "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1 +x_0=200000 +y_0=250000 +ellps=airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs ",
  ],
  "EPSG:29902": [
    "TM65 / Irish Grid",
    "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs ",
  ],
  "EPSG:29903": [
    "TM75 / Irish Grid",
    "+proj=tmerc +lat_0=53.5 +lon_0=-8 +k=1.000035 +x_0=200000 +y_0=250000 +ellps=mod_airy +towgs84=482.5,-130.6,564.6,-1.042,-0.214,-0.631,8.15 +units=m +no_defs ",
  ],
  "EPSG:30161": [
    "Tokyo / Japan Plane Rectangular CS I",
    "+proj=tmerc +lat_0=33 +lon_0=129.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30162": [
    "Tokyo / Japan Plane Rectangular CS II",
    "+proj=tmerc +lat_0=33 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30163": [
    "Tokyo / Japan Plane Rectangular CS III",
    "+proj=tmerc +lat_0=36 +lon_0=132.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30165": [
    "Tokyo / Japan Plane Rectangular CS V",
    "+proj=tmerc +lat_0=36 +lon_0=134.3333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30166": [
    "Tokyo / Japan Plane Rectangular CS VI",
    "+proj=tmerc +lat_0=36 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30167": [
    "Tokyo / Japan Plane Rectangular CS VII",
    "+proj=tmerc +lat_0=36 +lon_0=137.1666666666667 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30168": [
    "Tokyo / Japan Plane Rectangular CS VIII",
    "+proj=tmerc +lat_0=36 +lon_0=138.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30169": [
    "Tokyo / Japan Plane Rectangular CS IX",
    "+proj=tmerc +lat_0=36 +lon_0=139.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30170": [
    "Tokyo / Japan Plane Rectangular CS X",
    "+proj=tmerc +lat_0=40 +lon_0=140.8333333333333 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30171": [
    "Tokyo / Japan Plane Rectangular CS XI",
    "+proj=tmerc +lat_0=44 +lon_0=140.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30172": [
    "Tokyo / Japan Plane Rectangular CS XII",
    "+proj=tmerc +lat_0=44 +lon_0=142.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30173": [
    "Tokyo / Japan Plane Rectangular CS XIII",
    "+proj=tmerc +lat_0=44 +lon_0=144.25 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30174": [
    "Tokyo / Japan Plane Rectangular CS XIV",
    "+proj=tmerc +lat_0=26 +lon_0=142 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30175": [
    "Tokyo / Japan Plane Rectangular CS XV",
    "+proj=tmerc +lat_0=26 +lon_0=127.5 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30176": [
    "Tokyo / Japan Plane Rectangular CS XVI",
    "+proj=tmerc +lat_0=26 +lon_0=124 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30177": [
    "Tokyo / Japan Plane Rectangular CS XVII",
    "+proj=tmerc +lat_0=26 +lon_0=131 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30178": [
    "Tokyo / Japan Plane Rectangular CS XVIII",
    "+proj=tmerc +lat_0=20 +lon_0=136 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30179": [
    "Tokyo / Japan Plane Rectangular CS XIX",
    "+proj=tmerc +lat_0=26 +lon_0=154 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=-148,507,685,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30200": [
    "Trinidad 1903 / Trinidad Grid",
    "+proj=cass +lat_0=10.44166666666667 +lon_0=-61.33333333333334 +x_0=86501.46392051999 +y_0=65379.0134283 +a=6378293.645208759 +b=6356617.987679838 +towgs84=-61.702,284.488,472.052,0,0,0,0 +to_meter=0.201166195164 +no_defs ",
  ],
  "EPSG:30339": [
    "TC(1948) / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=helmert +units=m +no_defs ",
  ],
  "EPSG:30340": [
    "TC(1948) / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=helmert +units=m +no_defs ",
  ],
  "EPSG:30491": [
    "Voirol 1875 / Nord Algerie (ancienne)",
    "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=2.7 +k_0=0.999625544 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30800": [
    "RT38 2.5 gon W (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15.80827777777778 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +units=m +no_defs ",
  ],
  "EPSG:30492": [
    "Voirol 1875 / Sud Algerie (ancienne)",
    "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=2.7 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +towgs84=-73,-247,227,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30493": [
    "Voirol 1879 / Nord Algerie (ancienne)",
    "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=2.7 +k_0=0.999625544 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:30494": [
    "Voirol 1879 / Sud Algerie (ancienne)",
    "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=2.7 +k_0=0.999625769 +x_0=500000 +y_0=300000 +a=6378249.2 +b=6356515 +units=m +no_defs ",
  ],
  "EPSG:30729": [
    "Nord Sahara 1959 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30730": [
    "Nord Sahara 1959 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30731": [
    "Nord Sahara 1959 / UTM zone 31N",
    "+proj=utm +zone=31 +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30732": [
    "Nord Sahara 1959 / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30791": [
    "Nord Sahara 1959 / Voirol Unifie Nord",
    "+proj=lcc +lat_1=36 +lat_0=36 +lon_0=2.7 +k_0=0.999625544 +x_0=500135 +y_0=300090 +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:30792": [
    "Nord Sahara 1959 / Voirol Unifie Sud",
    "+proj=lcc +lat_1=33.3 +lat_0=33.3 +lon_0=2.7 +k_0=0.999625769 +x_0=500135 +y_0=300090 +ellps=clrk80 +towgs84=-186,-93,310,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31154": [
    "Zanderij / TM 54 NW",
    "+proj=tmerc +lat_0=0 +lon_0=-54 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31170": [
    "Zanderij / Suriname Old TM",
    "+proj=tmerc +lat_0=0 +lon_0=-55.68333333333333 +k=0.9996 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31171": [
    "Zanderij / Suriname TM",
    "+proj=tmerc +lat_0=0 +lon_0=-55.68333333333333 +k=0.9999 +x_0=500000 +y_0=0 +ellps=intl +towgs84=-265,120,-358,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31251": [
    "MGI (Ferro) / Austria GK West Zone",
    "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31252": [
    "MGI (Ferro) / Austria GK Central Zone",
    "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31253": [
    "MGI (Ferro) / Austria GK East Zone",
    "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31254": [
    "MGI / Austria GK West",
    "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31255": [
    "MGI / Austria GK Central",
    "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31256": [
    "MGI / Austria GK East",
    "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=0 +y_0=-5000000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31257": [
    "MGI / Austria GK M28",
    "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=150000 +y_0=-5000000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31258": [
    "MGI / Austria GK M31",
    "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=450000 +y_0=-5000000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31259": [
    "MGI / Austria GK M34",
    "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=750000 +y_0=-5000000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31265": [
    "MGI / 3-degree Gauss zone 5 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31266": [
    "MGI / 3-degree Gauss zone 6 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=1 +x_0=6500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31267": [
    "MGI / 3-degree Gauss zone 7 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=1 +x_0=7500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31268": [
    "MGI / 3-degree Gauss zone 8 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=1 +x_0=8500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31275": [
    "MGI / Balkans zone 5 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=0.9999 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31276": [
    "MGI / Balkans zone 6 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=18 +k=0.9999 +x_0=6500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31277": [
    "MGI / Balkans zone 7 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=7500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31278": [
    "MGI / Balkans zone 8 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=21 +k=0.9999 +x_0=7500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31279": [
    "MGI / Balkans zone 8 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9999 +x_0=8500000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31281": [
    "MGI (Ferro) / Austria West Zone",
    "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31282": [
    "MGI (Ferro) / Austria Central Zone",
    "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31283": [
    "MGI (Ferro) / Austria East Zone",
    "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31284": [
    "MGI / Austria M28",
    "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=150000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31285": [
    "MGI / Austria M31",
    "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=450000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31286": [
    "MGI / Austria M34",
    "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=750000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31287": [
    "MGI / Austria Lambert",
    "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31288": [
    "MGI (Ferro) / M28",
    "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=150000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31289": [
    "MGI (Ferro) / M31",
    "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=450000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31290": [
    "MGI (Ferro) / M34",
    "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=750000 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31291": [
    "MGI (Ferro) / Austria West Zone (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=28 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31292": [
    "MGI (Ferro) / Austria Central Zone (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=31 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31293": [
    "MGI (Ferro) / Austria East Zone (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=34 +k=1 +x_0=0 +y_0=0 +ellps=bessel +towgs84=682,-203,480,0,0,0,0 +pm=ferro +units=m +no_defs ",
  ],
  "EPSG:31294": [
    "MGI / M28 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=10.33333333333333 +k=1 +x_0=150000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31295": [
    "MGI / M31 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=13.33333333333333 +k=1 +x_0=450000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31296": [
    "MGI / M34 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=16.33333333333333 +k=1 +x_0=750000 +y_0=0 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31297": [
    "MGI / Austria Lambert (deprecated)",
    "+proj=lcc +lat_1=49 +lat_2=46 +lat_0=47.5 +lon_0=13.33333333333333 +x_0=400000 +y_0=400000 +ellps=bessel +towgs84=577.326,90.129,463.919,5.137,1.474,5.297,2.4232 +units=m +no_defs ",
  ],
  "EPSG:31300": [
    "Belge 1972 / Belge Lambert 72",
    "+proj=lcc +lat_1=49.83333333333334 +lat_2=51.16666666666666 +lat_0=90 +lon_0=4.356939722222222 +x_0=150000.01256 +y_0=5400088.4378 +ellps=intl +towgs84=-106.868628,52.297783,-103.723893,0.336570,-0.456955,1.842183,-1.2747 +units=m +no_defs ",
  ],
  "EPSG:31370": [
    "Belge 1972 / Belgian Lambert 72",
    "+proj=lcc +lat_1=51.16666723333333 +lat_2=49.8333339 +lat_0=90 +lon_0=4.367486666666666 +x_0=150000.013 +y_0=5400088.438 +ellps=intl +towgs84=-106.868628,52.297783,-103.723893,0.336570,-0.456955,1.842183,-1.2747 +units=m +no_defs ",
  ],
  "EPSG:31461": [
    "DHDN / 3-degree Gauss zone 1 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=3 +k=1 +x_0=1500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31462": [
    "DHDN / 3-degree Gauss zone 2 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31463": [
    "DHDN / 3-degree Gauss zone 3 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31464": [
    "DHDN / 3-degree Gauss zone 4 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31465": [
    "DHDN / 3-degree Gauss zone 5 (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31466": [
    "DHDN / 3-degree Gauss-Kruger zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=6 +k=1 +x_0=2500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31467": [
    "DHDN / 3-degree Gauss-Kruger zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=9 +k=1 +x_0=3500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31468": [
    "DHDN / 3-degree Gauss-Kruger zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=12 +k=1 +x_0=4500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31469": [
    "DHDN / 3-degree Gauss-Kruger zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=15 +k=1 +x_0=5500000 +y_0=0 +ellps=bessel +towgs84=598.1,73.7,418.2,0.202,0.045,-2.455,6.7 +units=m +no_defs ",
  ],
  "EPSG:31528": [
    "Conakry 1905 / UTM zone 28N",
    "+proj=utm +zone=28 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31529": [
    "Conakry 1905 / UTM zone 29N",
    "+proj=utm +zone=29 +a=6378249.2 +b=6356515 +towgs84=-23,259,-9,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31600": [
    "Dealul Piscului 1930 / Stereo 33",
    "+proj=sterea +lat_0=45.9 +lon_0=25.39246588888889 +k=0.9996667 +x_0=500000 +y_0=500000 +ellps=intl +towgs84=103.25,-100.4,-307.19,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31700": [
    "Dealul Piscului 1970/ Stereo 70 (deprecated)",
    "+proj=sterea +lat_0=46 +lon_0=25 +k=0.99975 +x_0=500000 +y_0=500000 +ellps=krass +towgs84=28,-121,-77,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31838": [
    "NGN / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=WGS84 +towgs84=-3.2,-5.7,2.8,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31839": [
    "NGN / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=WGS84 +towgs84=-3.2,-5.7,2.8,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31900": [
    "KUDAMS / KTM (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=48 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-20.8,11.3,2.4,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31901": [
    "KUDAMS / KTM",
    "+proj=tmerc +lat_0=0 +lon_0=48 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-20.8,11.3,2.4,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31965": [
    "SIRGAS 2000 / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31966": [
    "SIRGAS 2000 / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31967": [
    "SIRGAS 2000 / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31968": [
    "SIRGAS 2000 / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31969": [
    "SIRGAS 2000 / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31970": [
    "SIRGAS 2000 / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31971": [
    "SIRGAS 2000 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31972": [
    "SIRGAS 2000 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31973": [
    "SIRGAS 2000 / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31974": [
    "SIRGAS 2000 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31975": [
    "SIRGAS 2000 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31976": [
    "SIRGAS 2000 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31977": [
    "SIRGAS 2000 / UTM zone 17S",
    "+proj=utm +zone=17 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31978": [
    "SIRGAS 2000 / UTM zone 18S",
    "+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31979": [
    "SIRGAS 2000 / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31980": [
    "SIRGAS 2000 / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31981": [
    "SIRGAS 2000 / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31982": [
    "SIRGAS 2000 / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31983": [
    "SIRGAS 2000 / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31984": [
    "SIRGAS 2000 / UTM zone 24S",
    "+proj=utm +zone=24 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31985": [
    "SIRGAS 2000 / UTM zone 25S",
    "+proj=utm +zone=25 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31986": [
    "SIRGAS 1995 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31987": [
    "SIRGAS 1995 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31988": [
    "SIRGAS 1995 / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31989": [
    "SIRGAS 1995 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31990": [
    "SIRGAS 1995 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31991": [
    "SIRGAS 1995 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31992": [
    "SIRGAS 1995 / UTM zone 17S",
    "+proj=utm +zone=17 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31993": [
    "SIRGAS 1995 / UTM zone 18S",
    "+proj=utm +zone=18 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31994": [
    "SIRGAS 1995 / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31995": [
    "SIRGAS 1995 / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31996": [
    "SIRGAS 1995 / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31997": [
    "SIRGAS 1995 / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31998": [
    "SIRGAS 1995 / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:31999": [
    "SIRGAS 1995 / UTM zone 24S",
    "+proj=utm +zone=24 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32084": [
    "NAD27 / MTM zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32000": [
    "SIRGAS 1995 / UTM zone 25S",
    "+proj=utm +zone=25 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32001": [
    "NAD27 / Montana North",
    "+proj=lcc +lat_1=48.71666666666667 +lat_2=47.85 +lat_0=47 +lon_0=-109.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32002": [
    "NAD27 / Montana Central",
    "+proj=lcc +lat_1=47.88333333333333 +lat_2=46.45 +lat_0=45.83333333333334 +lon_0=-109.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32003": [
    "NAD27 / Montana South",
    "+proj=lcc +lat_1=46.4 +lat_2=44.86666666666667 +lat_0=44 +lon_0=-109.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32005": [
    "NAD27 / Nebraska North",
    "+proj=lcc +lat_1=41.85 +lat_2=42.81666666666667 +lat_0=41.33333333333334 +lon_0=-100 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32006": [
    "NAD27 / Nebraska South",
    "+proj=lcc +lat_1=40.28333333333333 +lat_2=41.71666666666667 +lat_0=39.66666666666666 +lon_0=-99.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32007": [
    "NAD27 / Nevada East",
    "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32008": [
    "NAD27 / Nevada Central",
    "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32009": [
    "NAD27 / Nevada West",
    "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32010": [
    "NAD27 / New Hampshire",
    "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32011": [
    "NAD27 / New Jersey",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.66666666666667 +k=0.9999749999999999 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32012": [
    "NAD27 / New Mexico East",
    "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32013": [
    "NAD27 / New Mexico Central",
    "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32014": [
    "NAD27 / New Mexico West",
    "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32015": [
    "NAD27 / New York East",
    "+proj=tmerc +lat_0=40 +lon_0=-74.33333333333333 +k=0.999966667 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32016": [
    "NAD27 / New York Central",
    "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32017": [
    "NAD27 / New York West",
    "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32018": [
    "NAD27 / New York Long Island (deprecated)",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.5 +lon_0=-74 +x_0=304800.6096012192 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32019": [
    "NAD27 / North Carolina",
    "+proj=lcc +lat_1=34.33333333333334 +lat_2=36.16666666666666 +lat_0=33.75 +lon_0=-79 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32020": [
    "NAD27 / North Dakota North",
    "+proj=lcc +lat_1=47.43333333333333 +lat_2=48.73333333333333 +lat_0=47 +lon_0=-100.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32021": [
    "NAD27 / North Dakota South",
    "+proj=lcc +lat_1=46.18333333333333 +lat_2=47.48333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32022": [
    "NAD27 / Ohio North",
    "+proj=lcc +lat_1=40.43333333333333 +lat_2=41.7 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32023": [
    "NAD27 / Ohio South",
    "+proj=lcc +lat_1=38.73333333333333 +lat_2=40.03333333333333 +lat_0=38 +lon_0=-82.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32024": [
    "NAD27 / Oklahoma North",
    "+proj=lcc +lat_1=35.56666666666667 +lat_2=36.76666666666667 +lat_0=35 +lon_0=-98 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32025": [
    "NAD27 / Oklahoma South",
    "+proj=lcc +lat_1=33.93333333333333 +lat_2=35.23333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32026": [
    "NAD27 / Oregon North",
    "+proj=lcc +lat_1=44.33333333333334 +lat_2=46 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32609": [
    "WGS 84 / UTM zone 9N",
    "+proj=utm +zone=9 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32027": [
    "NAD27 / Oregon South",
    "+proj=lcc +lat_1=42.33333333333334 +lat_2=44 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32028": [
    "NAD27 / Pennsylvania North",
    "+proj=lcc +lat_1=40.88333333333333 +lat_2=41.95 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32029": [
    "NAD27 / Pennsylvania South (deprecated)",
    "+proj=lcc +lat_1=39.93333333333333 +lat_2=40.8 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32030": [
    "NAD27 / Rhode Island",
    "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.9999938 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32031": [
    "NAD27 / South Carolina North",
    "+proj=lcc +lat_1=33.76666666666667 +lat_2=34.96666666666667 +lat_0=33 +lon_0=-81 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32033": [
    "NAD27 / South Carolina South",
    "+proj=lcc +lat_1=32.33333333333334 +lat_2=33.66666666666666 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32034": [
    "NAD27 / South Dakota North",
    "+proj=lcc +lat_1=44.41666666666666 +lat_2=45.68333333333333 +lat_0=43.83333333333334 +lon_0=-100 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32035": [
    "NAD27 / South Dakota South",
    "+proj=lcc +lat_1=42.83333333333334 +lat_2=44.4 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32610": [
    "WGS 84 / UTM zone 10N",
    "+proj=utm +zone=10 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32036": [
    "NAD27 / Tennessee (deprecated)",
    "+proj=lcc +lat_1=35.25 +lat_2=36.41666666666666 +lat_0=34.66666666666666 +lon_0=-86 +x_0=30480.06096012192 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32037": [
    "NAD27 / Texas North",
    "+proj=lcc +lat_1=34.65 +lat_2=36.18333333333333 +lat_0=34 +lon_0=-101.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32038": [
    "NAD27 / Texas North Central",
    "+proj=lcc +lat_1=32.13333333333333 +lat_2=33.96666666666667 +lat_0=31.66666666666667 +lon_0=-97.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32039": [
    "NAD27 / Texas Central",
    "+proj=lcc +lat_1=30.11666666666667 +lat_2=31.88333333333333 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32040": [
    "NAD27 / Texas South Central",
    "+proj=lcc +lat_1=28.38333333333333 +lat_2=30.28333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32041": [
    "NAD27 / Texas South",
    "+proj=lcc +lat_1=26.16666666666667 +lat_2=27.83333333333333 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32042": [
    "NAD27 / Utah North",
    "+proj=lcc +lat_1=40.71666666666667 +lat_2=41.78333333333333 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32043": [
    "NAD27 / Utah Central",
    "+proj=lcc +lat_1=39.01666666666667 +lat_2=40.65 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32044": [
    "NAD27 / Utah South",
    "+proj=lcc +lat_1=37.21666666666667 +lat_2=38.35 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32045": [
    "NAD27 / Vermont",
    "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32046": [
    "NAD27 / Virginia North",
    "+proj=lcc +lat_1=38.03333333333333 +lat_2=39.2 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32047": [
    "NAD27 / Virginia South",
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=37.96666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32048": [
    "NAD27 / Washington North",
    "+proj=lcc +lat_1=47.5 +lat_2=48.73333333333333 +lat_0=47 +lon_0=-120.8333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32049": [
    "NAD27 / Washington South",
    "+proj=lcc +lat_1=45.83333333333334 +lat_2=47.33333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32050": [
    "NAD27 / West Virginia North",
    "+proj=lcc +lat_1=39 +lat_2=40.25 +lat_0=38.5 +lon_0=-79.5 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32051": [
    "NAD27 / West Virginia South",
    "+proj=lcc +lat_1=37.48333333333333 +lat_2=38.88333333333333 +lat_0=37 +lon_0=-81 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32064": [
    "NAD27 / BLM 14N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32052": [
    "NAD27 / Wisconsin North",
    "+proj=lcc +lat_1=45.56666666666667 +lat_2=46.76666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32053": [
    "NAD27 / Wisconsin Central",
    "+proj=lcc +lat_1=44.25 +lat_2=45.5 +lat_0=43.83333333333334 +lon_0=-90 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32054": [
    "NAD27 / Wisconsin South",
    "+proj=lcc +lat_1=42.73333333333333 +lat_2=44.06666666666667 +lat_0=42 +lon_0=-90 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32055": [
    "NAD27 / Wyoming East",
    "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-105.1666666666667 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32056": [
    "NAD27 / Wyoming East Central",
    "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-107.3333333333333 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32057": [
    "NAD27 / Wyoming West Central",
    "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-108.75 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32058": [
    "NAD27 / Wyoming West",
    "+proj=tmerc +lat_0=40.66666666666666 +lon_0=-110.0833333333333 +k=0.999941177 +x_0=152400.3048006096 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32061": [
    "NAD27 / Guatemala Norte",
    "+proj=lcc +lat_1=16.81666666666667 +lat_0=16.81666666666667 +lon_0=-90.33333333333333 +k_0=0.99992226 +x_0=500000 +y_0=292209.579 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32062": [
    "NAD27 / Guatemala Sur",
    "+proj=lcc +lat_1=14.9 +lat_0=14.9 +lon_0=-90.33333333333333 +k_0=0.99989906 +x_0=500000 +y_0=325992.681 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32065": [
    "NAD27 / BLM 15N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32066": [
    "NAD27 / BLM 16N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32067": [
    "NAD27 / BLM 17N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32074": [
    "NAD27 / BLM 14N (feet) (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32075": [
    "NAD27 / BLM 15N (feet) (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32076": [
    "NAD27 / BLM 16N (feet) (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32077": [
    "NAD27 / BLM 17N (feet) (deprecated)",
    "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32081": [
    "NAD27 / MTM zone 1",
    "+proj=tmerc +lat_0=0 +lon_0=-53 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32082": [
    "NAD27 / MTM zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=-56 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32083": [
    "NAD27 / MTM zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32085": [
    "NAD27 / MTM zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32086": [
    "NAD27 / MTM zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32098": [
    "NAD27 / Quebec Lambert",
    "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +datum=NAD27 +units=m +no_defs ",
  ],
  "EPSG:32099": [
    "NAD27 / Louisiana Offshore",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-91.33333333333333 +x_0=609601.2192024384 +y_0=0 +datum=NAD27 +units=us-ft +no_defs ",
  ],
  "EPSG:32100": [
    "NAD83 / Montana",
    "+proj=lcc +lat_1=49 +lat_2=45 +lat_0=44.25 +lon_0=-109.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32104": [
    "NAD83 / Nebraska",
    "+proj=lcc +lat_1=43 +lat_2=40 +lat_0=39.83333333333334 +lon_0=-100 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32107": [
    "NAD83 / Nevada East",
    "+proj=tmerc +lat_0=34.75 +lon_0=-115.5833333333333 +k=0.9999 +x_0=200000 +y_0=8000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32108": [
    "NAD83 / Nevada Central",
    "+proj=tmerc +lat_0=34.75 +lon_0=-116.6666666666667 +k=0.9999 +x_0=500000 +y_0=6000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32109": [
    "NAD83 / Nevada West",
    "+proj=tmerc +lat_0=34.75 +lon_0=-118.5833333333333 +k=0.9999 +x_0=800000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32110": [
    "NAD83 / New Hampshire",
    "+proj=tmerc +lat_0=42.5 +lon_0=-71.66666666666667 +k=0.999966667 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32111": [
    "NAD83 / New Jersey",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32112": [
    "NAD83 / New Mexico East",
    "+proj=tmerc +lat_0=31 +lon_0=-104.3333333333333 +k=0.999909091 +x_0=165000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32113": [
    "NAD83 / New Mexico Central",
    "+proj=tmerc +lat_0=31 +lon_0=-106.25 +k=0.9999 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32114": [
    "NAD83 / New Mexico West",
    "+proj=tmerc +lat_0=31 +lon_0=-107.8333333333333 +k=0.999916667 +x_0=830000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32115": [
    "NAD83 / New York East",
    "+proj=tmerc +lat_0=38.83333333333334 +lon_0=-74.5 +k=0.9999 +x_0=150000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32116": [
    "NAD83 / New York Central",
    "+proj=tmerc +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=250000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32117": [
    "NAD83 / New York West",
    "+proj=tmerc +lat_0=40 +lon_0=-78.58333333333333 +k=0.9999375 +x_0=350000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32118": [
    "NAD83 / New York Long Island",
    "+proj=lcc +lat_1=41.03333333333333 +lat_2=40.66666666666666 +lat_0=40.16666666666666 +lon_0=-74 +x_0=300000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32119": [
    "NAD83 / North Carolina",
    "+proj=lcc +lat_1=36.16666666666666 +lat_2=34.33333333333334 +lat_0=33.75 +lon_0=-79 +x_0=609601.22 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32120": [
    "NAD83 / North Dakota North",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.43333333333333 +lat_0=47 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32121": [
    "NAD83 / North Dakota South",
    "+proj=lcc +lat_1=47.48333333333333 +lat_2=46.18333333333333 +lat_0=45.66666666666666 +lon_0=-100.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32122": [
    "NAD83 / Ohio North",
    "+proj=lcc +lat_1=41.7 +lat_2=40.43333333333333 +lat_0=39.66666666666666 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32123": [
    "NAD83 / Ohio South",
    "+proj=lcc +lat_1=40.03333333333333 +lat_2=38.73333333333333 +lat_0=38 +lon_0=-82.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32124": [
    "NAD83 / Oklahoma North",
    "+proj=lcc +lat_1=36.76666666666667 +lat_2=35.56666666666667 +lat_0=35 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32125": [
    "NAD83 / Oklahoma South",
    "+proj=lcc +lat_1=35.23333333333333 +lat_2=33.93333333333333 +lat_0=33.33333333333334 +lon_0=-98 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32126": [
    "NAD83 / Oregon North",
    "+proj=lcc +lat_1=46 +lat_2=44.33333333333334 +lat_0=43.66666666666666 +lon_0=-120.5 +x_0=2500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32611": [
    "WGS 84 / UTM zone 11N",
    "+proj=utm +zone=11 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32127": [
    "NAD83 / Oregon South",
    "+proj=lcc +lat_1=44 +lat_2=42.33333333333334 +lat_0=41.66666666666666 +lon_0=-120.5 +x_0=1500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32128": [
    "NAD83 / Pennsylvania North",
    "+proj=lcc +lat_1=41.95 +lat_2=40.88333333333333 +lat_0=40.16666666666666 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32129": [
    "NAD83 / Pennsylvania South",
    "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32130": [
    "NAD83 / Rhode Island",
    "+proj=tmerc +lat_0=41.08333333333334 +lon_0=-71.5 +k=0.99999375 +x_0=100000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32133": [
    "NAD83 / South Carolina",
    "+proj=lcc +lat_1=34.83333333333334 +lat_2=32.5 +lat_0=31.83333333333333 +lon_0=-81 +x_0=609600 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32134": [
    "NAD83 / South Dakota North",
    "+proj=lcc +lat_1=45.68333333333333 +lat_2=44.41666666666666 +lat_0=43.83333333333334 +lon_0=-100 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32135": [
    "NAD83 / South Dakota South",
    "+proj=lcc +lat_1=44.4 +lat_2=42.83333333333334 +lat_0=42.33333333333334 +lon_0=-100.3333333333333 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32136": [
    "NAD83 / Tennessee",
    "+proj=lcc +lat_1=36.41666666666666 +lat_2=35.25 +lat_0=34.33333333333334 +lon_0=-86 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32210": [
    "WGS 72 / UTM zone 10N",
    "+proj=utm +zone=10 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32137": [
    "NAD83 / Texas North",
    "+proj=lcc +lat_1=36.18333333333333 +lat_2=34.65 +lat_0=34 +lon_0=-101.5 +x_0=200000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32138": [
    "NAD83 / Texas North Central",
    "+proj=lcc +lat_1=33.96666666666667 +lat_2=32.13333333333333 +lat_0=31.66666666666667 +lon_0=-98.5 +x_0=600000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32139": [
    "NAD83 / Texas Central",
    "+proj=lcc +lat_1=31.88333333333333 +lat_2=30.11666666666667 +lat_0=29.66666666666667 +lon_0=-100.3333333333333 +x_0=700000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32140": [
    "NAD83 / Texas South Central",
    "+proj=lcc +lat_1=30.28333333333333 +lat_2=28.38333333333333 +lat_0=27.83333333333333 +lon_0=-99 +x_0=600000 +y_0=4000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32141": [
    "NAD83 / Texas South",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.66666666666667 +lon_0=-98.5 +x_0=300000 +y_0=5000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32142": [
    "NAD83 / Utah North",
    "+proj=lcc +lat_1=41.78333333333333 +lat_2=40.71666666666667 +lat_0=40.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32143": [
    "NAD83 / Utah Central",
    "+proj=lcc +lat_1=40.65 +lat_2=39.01666666666667 +lat_0=38.33333333333334 +lon_0=-111.5 +x_0=500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32144": [
    "NAD83 / Utah South",
    "+proj=lcc +lat_1=38.35 +lat_2=37.21666666666667 +lat_0=36.66666666666666 +lon_0=-111.5 +x_0=500000 +y_0=3000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32145": [
    "NAD83 / Vermont",
    "+proj=tmerc +lat_0=42.5 +lon_0=-72.5 +k=0.999964286 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32146": [
    "NAD83 / Virginia North",
    "+proj=lcc +lat_1=39.2 +lat_2=38.03333333333333 +lat_0=37.66666666666666 +lon_0=-78.5 +x_0=3500000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32147": [
    "NAD83 / Virginia South",
    "+proj=lcc +lat_1=37.96666666666667 +lat_2=36.76666666666667 +lat_0=36.33333333333334 +lon_0=-78.5 +x_0=3500000 +y_0=1000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32148": [
    "NAD83 / Washington North",
    "+proj=lcc +lat_1=48.73333333333333 +lat_2=47.5 +lat_0=47 +lon_0=-120.8333333333333 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32149": [
    "NAD83 / Washington South",
    "+proj=lcc +lat_1=47.33333333333334 +lat_2=45.83333333333334 +lat_0=45.33333333333334 +lon_0=-120.5 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32150": [
    "NAD83 / West Virginia North",
    "+proj=lcc +lat_1=40.25 +lat_2=39 +lat_0=38.5 +lon_0=-79.5 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32151": [
    "NAD83 / West Virginia South",
    "+proj=lcc +lat_1=38.88333333333333 +lat_2=37.48333333333333 +lat_0=37 +lon_0=-81 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32152": [
    "NAD83 / Wisconsin North",
    "+proj=lcc +lat_1=46.76666666666667 +lat_2=45.56666666666667 +lat_0=45.16666666666666 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32188": [
    "NAD83 / MTM zone 8",
    "+proj=tmerc +lat_0=0 +lon_0=-73.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32153": [
    "NAD83 / Wisconsin Central",
    "+proj=lcc +lat_1=45.5 +lat_2=44.25 +lat_0=43.83333333333334 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32154": [
    "NAD83 / Wisconsin South",
    "+proj=lcc +lat_1=44.06666666666667 +lat_2=42.73333333333333 +lat_0=42 +lon_0=-90 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32155": [
    "NAD83 / Wyoming East",
    "+proj=tmerc +lat_0=40.5 +lon_0=-105.1666666666667 +k=0.9999375 +x_0=200000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32156": [
    "NAD83 / Wyoming East Central",
    "+proj=tmerc +lat_0=40.5 +lon_0=-107.3333333333333 +k=0.9999375 +x_0=400000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32157": [
    "NAD83 / Wyoming West Central",
    "+proj=tmerc +lat_0=40.5 +lon_0=-108.75 +k=0.9999375 +x_0=600000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32158": [
    "NAD83 / Wyoming West",
    "+proj=tmerc +lat_0=40.5 +lon_0=-110.0833333333333 +k=0.9999375 +x_0=800000 +y_0=100000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32161": [
    "NAD83 / Puerto Rico & Virgin Is.",
    "+proj=lcc +lat_1=18.43333333333333 +lat_2=18.03333333333333 +lat_0=17.83333333333333 +lon_0=-66.43333333333334 +x_0=200000 +y_0=200000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32164": [
    "NAD83 / BLM 14N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:32165": [
    "NAD83 / BLM 15N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:32166": [
    "NAD83 / BLM 16N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:32167": [
    "NAD83 / BLM 17N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=us-ft +no_defs ",
  ],
  "EPSG:32180": [
    "NAD83 / SCoPQ zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=-55.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32181": [
    "NAD83 / MTM zone 1",
    "+proj=tmerc +lat_0=0 +lon_0=-53 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32182": [
    "NAD83 / MTM zone 2",
    "+proj=tmerc +lat_0=0 +lon_0=-56 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32183": [
    "NAD83 / MTM zone 3",
    "+proj=tmerc +lat_0=0 +lon_0=-58.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32184": [
    "NAD83 / MTM zone 4",
    "+proj=tmerc +lat_0=0 +lon_0=-61.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32185": [
    "NAD83 / MTM zone 5",
    "+proj=tmerc +lat_0=0 +lon_0=-64.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32186": [
    "NAD83 / MTM zone 6",
    "+proj=tmerc +lat_0=0 +lon_0=-67.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32187": [
    "NAD83 / MTM zone 7",
    "+proj=tmerc +lat_0=0 +lon_0=-70.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32189": [
    "NAD83 / MTM zone 9",
    "+proj=tmerc +lat_0=0 +lon_0=-76.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32190": [
    "NAD83 / MTM zone 10",
    "+proj=tmerc +lat_0=0 +lon_0=-79.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32191": [
    "NAD83 / MTM zone 11",
    "+proj=tmerc +lat_0=0 +lon_0=-82.5 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32192": [
    "NAD83 / MTM zone 12",
    "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32193": [
    "NAD83 / MTM zone 13",
    "+proj=tmerc +lat_0=0 +lon_0=-84 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32194": [
    "NAD83 / MTM zone 14",
    "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32195": [
    "NAD83 / MTM zone 15",
    "+proj=tmerc +lat_0=0 +lon_0=-90 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32196": [
    "NAD83 / MTM zone 16",
    "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32197": [
    "NAD83 / MTM zone 17",
    "+proj=tmerc +lat_0=0 +lon_0=-96 +k=0.9999 +x_0=304800 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32198": [
    "NAD83 / Quebec Lambert",
    "+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32199": [
    "NAD83 / Louisiana Offshore",
    "+proj=lcc +lat_1=27.83333333333333 +lat_2=26.16666666666667 +lat_0=25.5 +lon_0=-91.33333333333333 +x_0=1000000 +y_0=0 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ",
  ],
  "EPSG:32201": [
    "WGS 72 / UTM zone 1N",
    "+proj=utm +zone=1 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32202": [
    "WGS 72 / UTM zone 2N",
    "+proj=utm +zone=2 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32203": [
    "WGS 72 / UTM zone 3N",
    "+proj=utm +zone=3 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32204": [
    "WGS 72 / UTM zone 4N",
    "+proj=utm +zone=4 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32205": [
    "WGS 72 / UTM zone 5N",
    "+proj=utm +zone=5 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32206": [
    "WGS 72 / UTM zone 6N",
    "+proj=utm +zone=6 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32207": [
    "WGS 72 / UTM zone 7N",
    "+proj=utm +zone=7 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32208": [
    "WGS 72 / UTM zone 8N",
    "+proj=utm +zone=8 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32209": [
    "WGS 72 / UTM zone 9N",
    "+proj=utm +zone=9 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32211": [
    "WGS 72 / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32212": [
    "WGS 72 / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32213": [
    "WGS 72 / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32214": [
    "WGS 72 / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32215": [
    "WGS 72 / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32216": [
    "WGS 72 / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32217": [
    "WGS 72 / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32218": [
    "WGS 72 / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32219": [
    "WGS 72 / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32220": [
    "WGS 72 / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32221": [
    "WGS 72 / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32222": [
    "WGS 72 / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32223": [
    "WGS 72 / UTM zone 23N",
    "+proj=utm +zone=23 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32224": [
    "WGS 72 / UTM zone 24N",
    "+proj=utm +zone=24 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32225": [
    "WGS 72 / UTM zone 25N",
    "+proj=utm +zone=25 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32226": [
    "WGS 72 / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32227": [
    "WGS 72 / UTM zone 27N",
    "+proj=utm +zone=27 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32228": [
    "WGS 72 / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32229": [
    "WGS 72 / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32230": [
    "WGS 72 / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32231": [
    "WGS 72 / UTM zone 31N",
    "+proj=utm +zone=31 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32232": [
    "WGS 72 / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32233": [
    "WGS 72 / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32234": [
    "WGS 72 / UTM zone 34N",
    "+proj=utm +zone=34 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32235": [
    "WGS 72 / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32236": [
    "WGS 72 / UTM zone 36N",
    "+proj=utm +zone=36 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32237": [
    "WGS 72 / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32238": [
    "WGS 72 / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32239": [
    "WGS 72 / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32240": [
    "WGS 72 / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32241": [
    "WGS 72 / UTM zone 41N",
    "+proj=utm +zone=41 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32242": [
    "WGS 72 / UTM zone 42N",
    "+proj=utm +zone=42 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32243": [
    "WGS 72 / UTM zone 43N",
    "+proj=utm +zone=43 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32244": [
    "WGS 72 / UTM zone 44N",
    "+proj=utm +zone=44 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32245": [
    "WGS 72 / UTM zone 45N",
    "+proj=utm +zone=45 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32246": [
    "WGS 72 / UTM zone 46N",
    "+proj=utm +zone=46 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32247": [
    "WGS 72 / UTM zone 47N",
    "+proj=utm +zone=47 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32248": [
    "WGS 72 / UTM zone 48N",
    "+proj=utm +zone=48 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32249": [
    "WGS 72 / UTM zone 49N",
    "+proj=utm +zone=49 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32250": [
    "WGS 72 / UTM zone 50N",
    "+proj=utm +zone=50 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32251": [
    "WGS 72 / UTM zone 51N",
    "+proj=utm +zone=51 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32252": [
    "WGS 72 / UTM zone 52N",
    "+proj=utm +zone=52 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32253": [
    "WGS 72 / UTM zone 53N",
    "+proj=utm +zone=53 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32254": [
    "WGS 72 / UTM zone 54N",
    "+proj=utm +zone=54 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32255": [
    "WGS 72 / UTM zone 55N",
    "+proj=utm +zone=55 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32256": [
    "WGS 72 / UTM zone 56N",
    "+proj=utm +zone=56 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32257": [
    "WGS 72 / UTM zone 57N",
    "+proj=utm +zone=57 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32258": [
    "WGS 72 / UTM zone 58N",
    "+proj=utm +zone=58 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32259": [
    "WGS 72 / UTM zone 59N",
    "+proj=utm +zone=59 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32260": [
    "WGS 72 / UTM zone 60N",
    "+proj=utm +zone=60 +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32301": [
    "WGS 72 / UTM zone 1S",
    "+proj=utm +zone=1 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32302": [
    "WGS 72 / UTM zone 2S",
    "+proj=utm +zone=2 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32303": [
    "WGS 72 / UTM zone 3S",
    "+proj=utm +zone=3 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32304": [
    "WGS 72 / UTM zone 4S",
    "+proj=utm +zone=4 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32305": [
    "WGS 72 / UTM zone 5S",
    "+proj=utm +zone=5 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32306": [
    "WGS 72 / UTM zone 6S",
    "+proj=utm +zone=6 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32307": [
    "WGS 72 / UTM zone 7S",
    "+proj=utm +zone=7 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32308": [
    "WGS 72 / UTM zone 8S",
    "+proj=utm +zone=8 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32309": [
    "WGS 72 / UTM zone 9S",
    "+proj=utm +zone=9 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32310": [
    "WGS 72 / UTM zone 10S",
    "+proj=utm +zone=10 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32311": [
    "WGS 72 / UTM zone 11S",
    "+proj=utm +zone=11 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32312": [
    "WGS 72 / UTM zone 12S",
    "+proj=utm +zone=12 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32313": [
    "WGS 72 / UTM zone 13S",
    "+proj=utm +zone=13 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32314": [
    "WGS 72 / UTM zone 14S",
    "+proj=utm +zone=14 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32315": [
    "WGS 72 / UTM zone 15S",
    "+proj=utm +zone=15 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32316": [
    "WGS 72 / UTM zone 16S",
    "+proj=utm +zone=16 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32317": [
    "WGS 72 / UTM zone 17S",
    "+proj=utm +zone=17 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32318": [
    "WGS 72 / UTM zone 18S",
    "+proj=utm +zone=18 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32319": [
    "WGS 72 / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32320": [
    "WGS 72 / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32321": [
    "WGS 72 / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32322": [
    "WGS 72 / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32323": [
    "WGS 72 / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32324": [
    "WGS 72 / UTM zone 24S",
    "+proj=utm +zone=24 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32325": [
    "WGS 72 / UTM zone 25S",
    "+proj=utm +zone=25 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32326": [
    "WGS 72 / UTM zone 26S",
    "+proj=utm +zone=26 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32327": [
    "WGS 72 / UTM zone 27S",
    "+proj=utm +zone=27 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32328": [
    "WGS 72 / UTM zone 28S",
    "+proj=utm +zone=28 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32329": [
    "WGS 72 / UTM zone 29S",
    "+proj=utm +zone=29 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32330": [
    "WGS 72 / UTM zone 30S",
    "+proj=utm +zone=30 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32331": [
    "WGS 72 / UTM zone 31S",
    "+proj=utm +zone=31 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32332": [
    "WGS 72 / UTM zone 32S",
    "+proj=utm +zone=32 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32333": [
    "WGS 72 / UTM zone 33S",
    "+proj=utm +zone=33 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32334": [
    "WGS 72 / UTM zone 34S",
    "+proj=utm +zone=34 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32335": [
    "WGS 72 / UTM zone 35S",
    "+proj=utm +zone=35 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32336": [
    "WGS 72 / UTM zone 36S",
    "+proj=utm +zone=36 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32337": [
    "WGS 72 / UTM zone 37S",
    "+proj=utm +zone=37 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32338": [
    "WGS 72 / UTM zone 38S",
    "+proj=utm +zone=38 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32339": [
    "WGS 72 / UTM zone 39S",
    "+proj=utm +zone=39 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32340": [
    "WGS 72 / UTM zone 40S",
    "+proj=utm +zone=40 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32341": [
    "WGS 72 / UTM zone 41S",
    "+proj=utm +zone=41 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32342": [
    "WGS 72 / UTM zone 42S",
    "+proj=utm +zone=42 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32343": [
    "WGS 72 / UTM zone 43S",
    "+proj=utm +zone=43 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32344": [
    "WGS 72 / UTM zone 44S",
    "+proj=utm +zone=44 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32345": [
    "WGS 72 / UTM zone 45S",
    "+proj=utm +zone=45 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32346": [
    "WGS 72 / UTM zone 46S",
    "+proj=utm +zone=46 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32347": [
    "WGS 72 / UTM zone 47S",
    "+proj=utm +zone=47 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32348": [
    "WGS 72 / UTM zone 48S",
    "+proj=utm +zone=48 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32349": [
    "WGS 72 / UTM zone 49S",
    "+proj=utm +zone=49 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32350": [
    "WGS 72 / UTM zone 50S",
    "+proj=utm +zone=50 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32351": [
    "WGS 72 / UTM zone 51S",
    "+proj=utm +zone=51 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32352": [
    "WGS 72 / UTM zone 52S",
    "+proj=utm +zone=52 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32353": [
    "WGS 72 / UTM zone 53S",
    "+proj=utm +zone=53 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32354": [
    "WGS 72 / UTM zone 54S",
    "+proj=utm +zone=54 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32355": [
    "WGS 72 / UTM zone 55S",
    "+proj=utm +zone=55 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32356": [
    "WGS 72 / UTM zone 56S",
    "+proj=utm +zone=56 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32357": [
    "WGS 72 / UTM zone 57S",
    "+proj=utm +zone=57 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32358": [
    "WGS 72 / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32359": [
    "WGS 72 / UTM zone 59S",
    "+proj=utm +zone=59 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32360": [
    "WGS 72 / UTM zone 60S",
    "+proj=utm +zone=60 +south +ellps=WGS72 +towgs84=0,0,4.5,0,0,0.554,0.2263 +units=m +no_defs ",
  ],
  "EPSG:32401": [
    "WGS 72BE / UTM zone 1N",
    "+proj=utm +zone=1 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32402": [
    "WGS 72BE / UTM zone 2N",
    "+proj=utm +zone=2 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32403": [
    "WGS 72BE / UTM zone 3N",
    "+proj=utm +zone=3 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32404": [
    "WGS 72BE / UTM zone 4N",
    "+proj=utm +zone=4 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32405": [
    "WGS 72BE / UTM zone 5N",
    "+proj=utm +zone=5 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32406": [
    "WGS 72BE / UTM zone 6N",
    "+proj=utm +zone=6 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32407": [
    "WGS 72BE / UTM zone 7N",
    "+proj=utm +zone=7 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32408": [
    "WGS 72BE / UTM zone 8N",
    "+proj=utm +zone=8 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32409": [
    "WGS 72BE / UTM zone 9N",
    "+proj=utm +zone=9 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32410": [
    "WGS 72BE / UTM zone 10N",
    "+proj=utm +zone=10 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32411": [
    "WGS 72BE / UTM zone 11N",
    "+proj=utm +zone=11 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32412": [
    "WGS 72BE / UTM zone 12N",
    "+proj=utm +zone=12 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32413": [
    "WGS 72BE / UTM zone 13N",
    "+proj=utm +zone=13 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32414": [
    "WGS 72BE / UTM zone 14N",
    "+proj=utm +zone=14 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32415": [
    "WGS 72BE / UTM zone 15N",
    "+proj=utm +zone=15 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32416": [
    "WGS 72BE / UTM zone 16N",
    "+proj=utm +zone=16 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32417": [
    "WGS 72BE / UTM zone 17N",
    "+proj=utm +zone=17 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32418": [
    "WGS 72BE / UTM zone 18N",
    "+proj=utm +zone=18 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32419": [
    "WGS 72BE / UTM zone 19N",
    "+proj=utm +zone=19 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32420": [
    "WGS 72BE / UTM zone 20N",
    "+proj=utm +zone=20 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32421": [
    "WGS 72BE / UTM zone 21N",
    "+proj=utm +zone=21 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32422": [
    "WGS 72BE / UTM zone 22N",
    "+proj=utm +zone=22 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32423": [
    "WGS 72BE / UTM zone 23N",
    "+proj=utm +zone=23 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32424": [
    "WGS 72BE / UTM zone 24N",
    "+proj=utm +zone=24 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32425": [
    "WGS 72BE / UTM zone 25N",
    "+proj=utm +zone=25 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32426": [
    "WGS 72BE / UTM zone 26N",
    "+proj=utm +zone=26 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32427": [
    "WGS 72BE / UTM zone 27N",
    "+proj=utm +zone=27 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32428": [
    "WGS 72BE / UTM zone 28N",
    "+proj=utm +zone=28 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32429": [
    "WGS 72BE / UTM zone 29N",
    "+proj=utm +zone=29 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32430": [
    "WGS 72BE / UTM zone 30N",
    "+proj=utm +zone=30 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32431": [
    "WGS 72BE / UTM zone 31N",
    "+proj=utm +zone=31 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32432": [
    "WGS 72BE / UTM zone 32N",
    "+proj=utm +zone=32 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32433": [
    "WGS 72BE / UTM zone 33N",
    "+proj=utm +zone=33 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32434": [
    "WGS 72BE / UTM zone 34N",
    "+proj=utm +zone=34 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32435": [
    "WGS 72BE / UTM zone 35N",
    "+proj=utm +zone=35 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32436": [
    "WGS 72BE / UTM zone 36N",
    "+proj=utm +zone=36 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32437": [
    "WGS 72BE / UTM zone 37N",
    "+proj=utm +zone=37 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32438": [
    "WGS 72BE / UTM zone 38N",
    "+proj=utm +zone=38 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32439": [
    "WGS 72BE / UTM zone 39N",
    "+proj=utm +zone=39 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32440": [
    "WGS 72BE / UTM zone 40N",
    "+proj=utm +zone=40 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32441": [
    "WGS 72BE / UTM zone 41N",
    "+proj=utm +zone=41 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32442": [
    "WGS 72BE / UTM zone 42N",
    "+proj=utm +zone=42 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32443": [
    "WGS 72BE / UTM zone 43N",
    "+proj=utm +zone=43 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32444": [
    "WGS 72BE / UTM zone 44N",
    "+proj=utm +zone=44 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32445": [
    "WGS 72BE / UTM zone 45N",
    "+proj=utm +zone=45 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32446": [
    "WGS 72BE / UTM zone 46N",
    "+proj=utm +zone=46 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32447": [
    "WGS 72BE / UTM zone 47N",
    "+proj=utm +zone=47 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32448": [
    "WGS 72BE / UTM zone 48N",
    "+proj=utm +zone=48 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32449": [
    "WGS 72BE / UTM zone 49N",
    "+proj=utm +zone=49 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32450": [
    "WGS 72BE / UTM zone 50N",
    "+proj=utm +zone=50 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32451": [
    "WGS 72BE / UTM zone 51N",
    "+proj=utm +zone=51 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32452": [
    "WGS 72BE / UTM zone 52N",
    "+proj=utm +zone=52 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32453": [
    "WGS 72BE / UTM zone 53N",
    "+proj=utm +zone=53 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32454": [
    "WGS 72BE / UTM zone 54N",
    "+proj=utm +zone=54 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32455": [
    "WGS 72BE / UTM zone 55N",
    "+proj=utm +zone=55 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32456": [
    "WGS 72BE / UTM zone 56N",
    "+proj=utm +zone=56 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32457": [
    "WGS 72BE / UTM zone 57N",
    "+proj=utm +zone=57 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32458": [
    "WGS 72BE / UTM zone 58N",
    "+proj=utm +zone=58 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32459": [
    "WGS 72BE / UTM zone 59N",
    "+proj=utm +zone=59 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32460": [
    "WGS 72BE / UTM zone 60N",
    "+proj=utm +zone=60 +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32501": [
    "WGS 72BE / UTM zone 1S",
    "+proj=utm +zone=1 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32502": [
    "WGS 72BE / UTM zone 2S",
    "+proj=utm +zone=2 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32503": [
    "WGS 72BE / UTM zone 3S",
    "+proj=utm +zone=3 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32504": [
    "WGS 72BE / UTM zone 4S",
    "+proj=utm +zone=4 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32505": [
    "WGS 72BE / UTM zone 5S",
    "+proj=utm +zone=5 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32506": [
    "WGS 72BE / UTM zone 6S",
    "+proj=utm +zone=6 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32507": [
    "WGS 72BE / UTM zone 7S",
    "+proj=utm +zone=7 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32508": [
    "WGS 72BE / UTM zone 8S",
    "+proj=utm +zone=8 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32509": [
    "WGS 72BE / UTM zone 9S",
    "+proj=utm +zone=9 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32510": [
    "WGS 72BE / UTM zone 10S",
    "+proj=utm +zone=10 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32511": [
    "WGS 72BE / UTM zone 11S",
    "+proj=utm +zone=11 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32512": [
    "WGS 72BE / UTM zone 12S",
    "+proj=utm +zone=12 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32513": [
    "WGS 72BE / UTM zone 13S",
    "+proj=utm +zone=13 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32514": [
    "WGS 72BE / UTM zone 14S",
    "+proj=utm +zone=14 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32515": [
    "WGS 72BE / UTM zone 15S",
    "+proj=utm +zone=15 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32516": [
    "WGS 72BE / UTM zone 16S",
    "+proj=utm +zone=16 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32517": [
    "WGS 72BE / UTM zone 17S",
    "+proj=utm +zone=17 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32518": [
    "WGS 72BE / UTM zone 18S",
    "+proj=utm +zone=18 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32519": [
    "WGS 72BE / UTM zone 19S",
    "+proj=utm +zone=19 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32520": [
    "WGS 72BE / UTM zone 20S",
    "+proj=utm +zone=20 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32521": [
    "WGS 72BE / UTM zone 21S",
    "+proj=utm +zone=21 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32522": [
    "WGS 72BE / UTM zone 22S",
    "+proj=utm +zone=22 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32523": [
    "WGS 72BE / UTM zone 23S",
    "+proj=utm +zone=23 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32524": [
    "WGS 72BE / UTM zone 24S",
    "+proj=utm +zone=24 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32525": [
    "WGS 72BE / UTM zone 25S",
    "+proj=utm +zone=25 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32526": [
    "WGS 72BE / UTM zone 26S",
    "+proj=utm +zone=26 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32527": [
    "WGS 72BE / UTM zone 27S",
    "+proj=utm +zone=27 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32528": [
    "WGS 72BE / UTM zone 28S",
    "+proj=utm +zone=28 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32529": [
    "WGS 72BE / UTM zone 29S",
    "+proj=utm +zone=29 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32530": [
    "WGS 72BE / UTM zone 30S",
    "+proj=utm +zone=30 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32531": [
    "WGS 72BE / UTM zone 31S",
    "+proj=utm +zone=31 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32532": [
    "WGS 72BE / UTM zone 32S",
    "+proj=utm +zone=32 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32533": [
    "WGS 72BE / UTM zone 33S",
    "+proj=utm +zone=33 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32534": [
    "WGS 72BE / UTM zone 34S",
    "+proj=utm +zone=34 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32535": [
    "WGS 72BE / UTM zone 35S",
    "+proj=utm +zone=35 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32536": [
    "WGS 72BE / UTM zone 36S",
    "+proj=utm +zone=36 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32537": [
    "WGS 72BE / UTM zone 37S",
    "+proj=utm +zone=37 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32538": [
    "WGS 72BE / UTM zone 38S",
    "+proj=utm +zone=38 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32539": [
    "WGS 72BE / UTM zone 39S",
    "+proj=utm +zone=39 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32540": [
    "WGS 72BE / UTM zone 40S",
    "+proj=utm +zone=40 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32541": [
    "WGS 72BE / UTM zone 41S",
    "+proj=utm +zone=41 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32542": [
    "WGS 72BE / UTM zone 42S",
    "+proj=utm +zone=42 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32543": [
    "WGS 72BE / UTM zone 43S",
    "+proj=utm +zone=43 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32544": [
    "WGS 72BE / UTM zone 44S",
    "+proj=utm +zone=44 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32545": [
    "WGS 72BE / UTM zone 45S",
    "+proj=utm +zone=45 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32546": [
    "WGS 72BE / UTM zone 46S",
    "+proj=utm +zone=46 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32547": [
    "WGS 72BE / UTM zone 47S",
    "+proj=utm +zone=47 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32548": [
    "WGS 72BE / UTM zone 48S",
    "+proj=utm +zone=48 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32549": [
    "WGS 72BE / UTM zone 49S",
    "+proj=utm +zone=49 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32550": [
    "WGS 72BE / UTM zone 50S",
    "+proj=utm +zone=50 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32551": [
    "WGS 72BE / UTM zone 51S",
    "+proj=utm +zone=51 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32552": [
    "WGS 72BE / UTM zone 52S",
    "+proj=utm +zone=52 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32553": [
    "WGS 72BE / UTM zone 53S",
    "+proj=utm +zone=53 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32554": [
    "WGS 72BE / UTM zone 54S",
    "+proj=utm +zone=54 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32555": [
    "WGS 72BE / UTM zone 55S",
    "+proj=utm +zone=55 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32556": [
    "WGS 72BE / UTM zone 56S",
    "+proj=utm +zone=56 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32557": [
    "WGS 72BE / UTM zone 57S",
    "+proj=utm +zone=57 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32558": [
    "WGS 72BE / UTM zone 58S",
    "+proj=utm +zone=58 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32559": [
    "WGS 72BE / UTM zone 59S",
    "+proj=utm +zone=59 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32560": [
    "WGS 72BE / UTM zone 60S",
    "+proj=utm +zone=60 +south +ellps=WGS72 +towgs84=0,0,1.9,0,0,0.814,-0.38 +units=m +no_defs ",
  ],
  "EPSG:32612": [
    "WGS 84 / UTM zone 12N",
    "+proj=utm +zone=12 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32613": [
    "WGS 84 / UTM zone 13N",
    "+proj=utm +zone=13 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32614": [
    "WGS 84 / UTM zone 14N",
    "+proj=utm +zone=14 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32615": [
    "WGS 84 / UTM zone 15N",
    "+proj=utm +zone=15 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32616": [
    "WGS 84 / UTM zone 16N",
    "+proj=utm +zone=16 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32617": [
    "WGS 84 / UTM zone 17N",
    "+proj=utm +zone=17 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32618": [
    "WGS 84 / UTM zone 18N",
    "+proj=utm +zone=18 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32619": [
    "WGS 84 / UTM zone 19N",
    "+proj=utm +zone=19 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32620": [
    "WGS 84 / UTM zone 20N",
    "+proj=utm +zone=20 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32621": [
    "WGS 84 / UTM zone 21N",
    "+proj=utm +zone=21 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32622": [
    "WGS 84 / UTM zone 22N",
    "+proj=utm +zone=22 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32623": [
    "WGS 84 / UTM zone 23N",
    "+proj=utm +zone=23 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32624": [
    "WGS 84 / UTM zone 24N",
    "+proj=utm +zone=24 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32625": [
    "WGS 84 / UTM zone 25N",
    "+proj=utm +zone=25 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32626": [
    "WGS 84 / UTM zone 26N",
    "+proj=utm +zone=26 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32627": [
    "WGS 84 / UTM zone 27N",
    "+proj=utm +zone=27 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32628": [
    "WGS 84 / UTM zone 28N",
    "+proj=utm +zone=28 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32629": [
    "WGS 84 / UTM zone 29N",
    "+proj=utm +zone=29 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32630": [
    "WGS 84 / UTM zone 30N",
    "+proj=utm +zone=30 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32631": [
    "WGS 84 / UTM zone 31N",
    "+proj=utm +zone=31 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32632": [
    "WGS 84 / UTM zone 32N",
    "+proj=utm +zone=32 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32633": [
    "WGS 84 / UTM zone 33N",
    "+proj=utm +zone=33 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32634": [
    "WGS 84 / UTM zone 34N",
    "+proj=utm +zone=34 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32635": [
    "WGS 84 / UTM zone 35N",
    "+proj=utm +zone=35 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32636": [
    "WGS 84 / UTM zone 36N",
    "+proj=utm +zone=36 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32637": [
    "WGS 84 / UTM zone 37N",
    "+proj=utm +zone=37 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32638": [
    "WGS 84 / UTM zone 38N",
    "+proj=utm +zone=38 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32639": [
    "WGS 84 / UTM zone 39N",
    "+proj=utm +zone=39 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32640": [
    "WGS 84 / UTM zone 40N",
    "+proj=utm +zone=40 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32641": [
    "WGS 84 / UTM zone 41N",
    "+proj=utm +zone=41 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32642": [
    "WGS 84 / UTM zone 42N",
    "+proj=utm +zone=42 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32643": [
    "WGS 84 / UTM zone 43N",
    "+proj=utm +zone=43 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32644": [
    "WGS 84 / UTM zone 44N",
    "+proj=utm +zone=44 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32645": [
    "WGS 84 / UTM zone 45N",
    "+proj=utm +zone=45 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32646": [
    "WGS 84 / UTM zone 46N",
    "+proj=utm +zone=46 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32647": [
    "WGS 84 / UTM zone 47N",
    "+proj=utm +zone=47 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32648": [
    "WGS 84 / UTM zone 48N",
    "+proj=utm +zone=48 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32649": [
    "WGS 84 / UTM zone 49N",
    "+proj=utm +zone=49 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32650": [
    "WGS 84 / UTM zone 50N",
    "+proj=utm +zone=50 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32651": [
    "WGS 84 / UTM zone 51N",
    "+proj=utm +zone=51 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32652": [
    "WGS 84 / UTM zone 52N",
    "+proj=utm +zone=52 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32653": [
    "WGS 84 / UTM zone 53N",
    "+proj=utm +zone=53 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32654": [
    "WGS 84 / UTM zone 54N",
    "+proj=utm +zone=54 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32655": [
    "WGS 84 / UTM zone 55N",
    "+proj=utm +zone=55 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32656": [
    "WGS 84 / UTM zone 56N",
    "+proj=utm +zone=56 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32657": [
    "WGS 84 / UTM zone 57N",
    "+proj=utm +zone=57 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32658": [
    "WGS 84 / UTM zone 58N",
    "+proj=utm +zone=58 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32659": [
    "WGS 84 / UTM zone 59N",
    "+proj=utm +zone=59 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32660": [
    "WGS 84 / UTM zone 60N",
    "+proj=utm +zone=60 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32661": [
    "WGS 84 / UPS North",
    "+proj=stere +lat_0=90 +lat_ts=90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32662": [
    "WGS 84 / Plate Carree (deprecated)",
    "+proj=eqc +lat_ts=0 +lat_0=0 +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32664": [
    "WGS 84 / BLM 14N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-99 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs ",
  ],
  "EPSG:32665": [
    "WGS 84 / BLM 15N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-93 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs ",
  ],
  "EPSG:32666": [
    "WGS 84 / BLM 16N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-87 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs ",
  ],
  "EPSG:32667": [
    "WGS 84 / BLM 17N (ftUS)",
    "+proj=tmerc +lat_0=0 +lon_0=-81 +k=0.9996 +x_0=500000.001016002 +y_0=0 +datum=WGS84 +units=us-ft +no_defs ",
  ],
  "EPSG:32701": [
    "WGS 84 / UTM zone 1S",
    "+proj=utm +zone=1 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32702": [
    "WGS 84 / UTM zone 2S",
    "+proj=utm +zone=2 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32703": [
    "WGS 84 / UTM zone 3S",
    "+proj=utm +zone=3 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32704": [
    "WGS 84 / UTM zone 4S",
    "+proj=utm +zone=4 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32705": [
    "WGS 84 / UTM zone 5S",
    "+proj=utm +zone=5 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32706": [
    "WGS 84 / UTM zone 6S",
    "+proj=utm +zone=6 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32707": [
    "WGS 84 / UTM zone 7S",
    "+proj=utm +zone=7 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32708": [
    "WGS 84 / UTM zone 8S",
    "+proj=utm +zone=8 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32709": [
    "WGS 84 / UTM zone 9S",
    "+proj=utm +zone=9 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32710": [
    "WGS 84 / UTM zone 10S",
    "+proj=utm +zone=10 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32711": [
    "WGS 84 / UTM zone 11S",
    "+proj=utm +zone=11 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32712": [
    "WGS 84 / UTM zone 12S",
    "+proj=utm +zone=12 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32713": [
    "WGS 84 / UTM zone 13S",
    "+proj=utm +zone=13 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32714": [
    "WGS 84 / UTM zone 14S",
    "+proj=utm +zone=14 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32715": [
    "WGS 84 / UTM zone 15S",
    "+proj=utm +zone=15 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32716": [
    "WGS 84 / UTM zone 16S",
    "+proj=utm +zone=16 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32717": [
    "WGS 84 / UTM zone 17S",
    "+proj=utm +zone=17 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32718": [
    "WGS 84 / UTM zone 18S",
    "+proj=utm +zone=18 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32719": [
    "WGS 84 / UTM zone 19S",
    "+proj=utm +zone=19 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32720": [
    "WGS 84 / UTM zone 20S",
    "+proj=utm +zone=20 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32721": [
    "WGS 84 / UTM zone 21S",
    "+proj=utm +zone=21 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32722": [
    "WGS 84 / UTM zone 22S",
    "+proj=utm +zone=22 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32723": [
    "WGS 84 / UTM zone 23S",
    "+proj=utm +zone=23 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32724": [
    "WGS 84 / UTM zone 24S",
    "+proj=utm +zone=24 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32725": [
    "WGS 84 / UTM zone 25S",
    "+proj=utm +zone=25 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32726": [
    "WGS 84 / UTM zone 26S",
    "+proj=utm +zone=26 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32727": [
    "WGS 84 / UTM zone 27S",
    "+proj=utm +zone=27 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32728": [
    "WGS 84 / UTM zone 28S",
    "+proj=utm +zone=28 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32729": [
    "WGS 84 / UTM zone 29S",
    "+proj=utm +zone=29 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32730": [
    "WGS 84 / UTM zone 30S",
    "+proj=utm +zone=30 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32731": [
    "WGS 84 / UTM zone 31S",
    "+proj=utm +zone=31 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32732": [
    "WGS 84 / UTM zone 32S",
    "+proj=utm +zone=32 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32733": [
    "WGS 84 / UTM zone 33S",
    "+proj=utm +zone=33 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32734": [
    "WGS 84 / UTM zone 34S",
    "+proj=utm +zone=34 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32735": [
    "WGS 84 / UTM zone 35S",
    "+proj=utm +zone=35 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32736": [
    "WGS 84 / UTM zone 36S",
    "+proj=utm +zone=36 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32737": [
    "WGS 84 / UTM zone 37S",
    "+proj=utm +zone=37 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32738": [
    "WGS 84 / UTM zone 38S",
    "+proj=utm +zone=38 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32739": [
    "WGS 84 / UTM zone 39S",
    "+proj=utm +zone=39 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32740": [
    "WGS 84 / UTM zone 40S",
    "+proj=utm +zone=40 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32741": [
    "WGS 84 / UTM zone 41S",
    "+proj=utm +zone=41 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32742": [
    "WGS 84 / UTM zone 42S",
    "+proj=utm +zone=42 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32743": [
    "WGS 84 / UTM zone 43S",
    "+proj=utm +zone=43 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32744": [
    "WGS 84 / UTM zone 44S",
    "+proj=utm +zone=44 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32745": [
    "WGS 84 / UTM zone 45S",
    "+proj=utm +zone=45 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32746": [
    "WGS 84 / UTM zone 46S",
    "+proj=utm +zone=46 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32747": [
    "WGS 84 / UTM zone 47S",
    "+proj=utm +zone=47 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32748": [
    "WGS 84 / UTM zone 48S",
    "+proj=utm +zone=48 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32749": [
    "WGS 84 / UTM zone 49S",
    "+proj=utm +zone=49 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32750": [
    "WGS 84 / UTM zone 50S",
    "+proj=utm +zone=50 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32751": [
    "WGS 84 / UTM zone 51S",
    "+proj=utm +zone=51 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32752": [
    "WGS 84 / UTM zone 52S",
    "+proj=utm +zone=52 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32753": [
    "WGS 84 / UTM zone 53S",
    "+proj=utm +zone=53 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32754": [
    "WGS 84 / UTM zone 54S",
    "+proj=utm +zone=54 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32755": [
    "WGS 84 / UTM zone 55S",
    "+proj=utm +zone=55 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32756": [
    "WGS 84 / UTM zone 56S",
    "+proj=utm +zone=56 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32757": [
    "WGS 84 / UTM zone 57S",
    "+proj=utm +zone=57 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32758": [
    "WGS 84 / UTM zone 58S",
    "+proj=utm +zone=58 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32759": [
    "WGS 84 / UTM zone 59S",
    "+proj=utm +zone=59 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32760": [
    "WGS 84 / UTM zone 60S",
    "+proj=utm +zone=60 +south +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32761": [
    "WGS 84 / UPS South",
    "+proj=stere +lat_0=-90 +lat_ts=-90 +lon_0=0 +k=0.994 +x_0=2000000 +y_0=2000000 +datum=WGS84 +units=m +no_defs ",
  ],
  "EPSG:32766": [
    "WGS 84 / TM 36 SE",
    "+proj=tmerc +lat_0=0 +lon_0=36 +k=0.9996 +x_0=500000 +y_0=10000000 +datum=WGS84 +units=m +no_defs ",
  ],
};

export default PROJS;
