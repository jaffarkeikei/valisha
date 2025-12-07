// Flag definitions with accurate row patterns
// RULE: Minimum 9 rows for proper size
// RULE: Must have symmetry (odd total for centered elements)

export interface FlagDefinition {
  name: string
  emoji: string
  rows: string[]
}

export const FLAGS: Record<string, FlagDefinition> = {

  // ═══════════════════════════════════════════════════════════════
  // EAST AFRICA
  // ═══════════════════════════════════════════════════════════════

  // Kenya: 3 black, 1 white, 3 red, 1 white, 3 green = 11 rows
  'KE': {
    name: 'Kenya',
    emoji: '🇰🇪',
    rows: [
      '#000000', '#000000', '#000000',
      '#FFFFFF',
      '#BB1600', '#BB1600', '#BB1600',
      '#FFFFFF',
      '#006600', '#006600', '#006600',
    ],
  },

  // Tanzania: 3 green, 1 yellow, 3 black, 1 yellow, 3 blue = 11 rows
  'TZ': {
    name: 'Tanzania',
    emoji: '🇹🇿',
    rows: [
      '#1EB53A', '#1EB53A', '#1EB53A',
      '#FCD116',
      '#000000', '#000000', '#000000',
      '#FCD116',
      '#00A3DD', '#00A3DD', '#00A3DD',
    ],
  },

  // Uganda: black-yellow-red repeated = 9 rows
  'UG': {
    name: 'Uganda',
    emoji: '🇺🇬',
    rows: [
      '#000000', '#000000', '#000000',
      '#FCDC04', '#FCDC04', '#FCDC04',
      '#D90000', '#D90000', '#D90000',
    ],
  },

  // Rwanda: 4 blue, 2 yellow, 3 green = 9 rows
  'RW': {
    name: 'Rwanda',
    emoji: '🇷🇼',
    rows: [
      '#00A1DE', '#00A1DE', '#00A1DE', '#00A1DE',
      '#FAD201', '#FAD201',
      '#1A8C36', '#1A8C36', '#1A8C36',
    ],
  },

  // Burundi: 3 red, 1 white, 3 green, 1 white, 3 red = 11 rows (symmetric)
  'BI': {
    name: 'Burundi',
    emoji: '🇧🇮',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF',
      '#1EB53A', '#1EB53A', '#1EB53A',
      '#FFFFFF',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Ethiopia: 3 green, 3 yellow, 3 red = 9 rows
  'ET': {
    name: 'Ethiopia',
    emoji: '🇪🇹',
    rows: [
      '#009A44', '#009A44', '#009A44',
      '#FCDD09', '#FCDD09', '#FCDD09',
      '#DA1F26', '#DA1F26', '#DA1F26',
    ],
  },

  // Eritrea: 3 blue, 3 green, 3 red = 9 rows
  'ER': {
    name: 'Eritrea',
    emoji: '🇪🇷',
    rows: [
      '#4189DD', '#4189DD', '#4189DD',
      '#12AD2B', '#12AD2B', '#12AD2B',
      '#EA0437', '#EA0437', '#EA0437',
    ],
  },

  // Somalia: all blue with white star center = 9 rows
  'SO': {
    name: 'Somalia',
    emoji: '🇸🇴',
    rows: [
      '#4189DD', '#4189DD', '#4189DD',
      '#4189DD', '#FFFFFF', '#4189DD',
      '#4189DD', '#4189DD', '#4189DD',
    ],
  },

  // Djibouti: 4 light blue, 1 white, 4 green = 9 rows
  'DJ': {
    name: 'Djibouti',
    emoji: '🇩🇯',
    rows: [
      '#6AB2E7', '#6AB2E7', '#6AB2E7', '#6AB2E7',
      '#FFFFFF',
      '#12AD2B', '#12AD2B', '#12AD2B', '#12AD2B',
    ],
  },

  // South Sudan: 2 black, 1 white, 3 red, 1 white, 2 green = 9 rows
  'SS': {
    name: 'South Sudan',
    emoji: '🇸🇸',
    rows: [
      '#000000', '#000000',
      '#FFFFFF',
      '#DA1F26', '#DA1F26', '#DA1F26',
      '#FFFFFF',
      '#078930', '#078930',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CENTRAL AFRICA
  // ═══════════════════════════════════════════════════════════════

  // Democratic Republic of Congo: 4 blue, 1 red/yellow, 4 blue = 9 rows
  'CD': {
    name: 'DR Congo',
    emoji: '🇨🇩',
    rows: [
      '#007FFF', '#007FFF', '#007FFF', '#007FFF',
      '#CE1021',
      '#007FFF', '#007FFF', '#007FFF', '#007FFF',
    ],
  },

  // Republic of Congo: 3 green, 3 yellow, 3 red = 9 rows
  'CG': {
    name: 'Congo',
    emoji: '🇨🇬',
    rows: [
      '#009543', '#009543', '#009543',
      '#FBDE4A', '#FBDE4A', '#FBDE4A',
      '#DC241F', '#DC241F', '#DC241F',
    ],
  },

  // Central African Republic: 2 blue, 1 white, 3 green, 1 yellow, 2 red = 9 rows
  'CF': {
    name: 'Central African Rep.',
    emoji: '🇨🇫',
    rows: [
      '#003082', '#003082',
      '#FFFFFF',
      '#289728', '#289728', '#289728',
      '#FFCE00',
      '#D21034', '#D21034',
    ],
  },

  // Chad: 3 blue, 3 yellow, 3 red = 9 rows
  'TD': {
    name: 'Chad',
    emoji: '🇹🇩',
    rows: [
      '#002664', '#002664', '#002664',
      '#FECB00', '#FECB00', '#FECB00',
      '#C60C30', '#C60C30', '#C60C30',
    ],
  },

  // Gabon: 3 green, 3 yellow, 3 blue = 9 rows
  'GA': {
    name: 'Gabon',
    emoji: '🇬🇦',
    rows: [
      '#009E60', '#009E60', '#009E60',
      '#FCD116', '#FCD116', '#FCD116',
      '#3A75C4', '#3A75C4', '#3A75C4',
    ],
  },

  // Equatorial Guinea: 3 green, 3 white, 3 red = 9 rows
  'GQ': {
    name: 'Equatorial Guinea',
    emoji: '🇬🇶',
    rows: [
      '#3E9A00', '#3E9A00', '#3E9A00',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#E32118', '#E32118', '#E32118',
    ],
  },

  // São Tomé and Príncipe: 3 green, 3 yellow, 3 green = 9 rows
  'ST': {
    name: 'São Tomé and Príncipe',
    emoji: '🇸🇹',
    rows: [
      '#12AD2B', '#12AD2B', '#12AD2B',
      '#FFCE00', '#FFCE00', '#FFCE00',
      '#12AD2B', '#12AD2B', '#12AD2B',
    ],
  },

  // Angola: 4 red, 1 black/yellow, 4 black = 9 rows
  'AO': {
    name: 'Angola',
    emoji: '🇦🇴',
    rows: [
      '#CC092F', '#CC092F', '#CC092F', '#CC092F',
      '#FEC00F',
      '#000000', '#000000', '#000000', '#000000',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // SOUTHERN AFRICA
  // ═══════════════════════════════════════════════════════════════

  // Zambia: 6 green, 3 red/orange/black = 9 rows
  'ZM': {
    name: 'Zambia',
    emoji: '🇿🇲',
    rows: [
      '#198A00', '#198A00', '#198A00',
      '#198A00', '#198A00', '#198A00',
      '#DE2010', '#EF7D00', '#000000',
    ],
  },

  // Zimbabwe: 3 green, 1 yellow, 3 red, 1 yellow, 3 black = 11 rows
  'ZW': {
    name: 'Zimbabwe',
    emoji: '🇿🇼',
    rows: [
      '#006B3F', '#006B3F', '#006B3F',
      '#FFC72C',
      '#DC143C', '#DC143C', '#DC143C',
      '#FFC72C',
      '#000000', '#000000', '#000000',
    ],
  },

  // Malawi: 3 black, 3 red, 3 green = 9 rows
  'MW': {
    name: 'Malawi',
    emoji: '🇲🇼',
    rows: [
      '#000000', '#000000', '#000000',
      '#CE1126', '#CE1126', '#CE1126',
      '#339E35', '#339E35', '#339E35',
    ],
  },

  // Mozambique: 3 green, 1 black, 3 yellow, 1 black, 3 red = 11 rows
  'MZ': {
    name: 'Mozambique',
    emoji: '🇲🇿',
    rows: [
      '#009A44', '#009A44', '#009A44',
      '#000000',
      '#FCDD09', '#FCDD09', '#FCDD09',
      '#000000',
      '#DB0000', '#DB0000', '#DB0000',
    ],
  },

  // Botswana: 4 blue, 1 white/black, 4 blue = 9 rows
  'BW': {
    name: 'Botswana',
    emoji: '🇧🇼',
    rows: [
      '#75AADB', '#75AADB', '#75AADB', '#75AADB',
      '#FFFFFF',
      '#75AADB', '#75AADB', '#75AADB', '#75AADB',
    ],
  },

  // Namibia: 3 blue, 3 red/white, 3 green = 9 rows
  'NA': {
    name: 'Namibia',
    emoji: '🇳🇦',
    rows: [
      '#003580', '#003580', '#003580',
      '#C8102E', '#FFFFFF', '#009543',
      '#009543', '#009543', '#009543',
    ],
  },

  // Lesotho: 3 blue, 3 white, 3 green = 9 rows
  'LS': {
    name: 'Lesotho',
    emoji: '🇱🇸',
    rows: [
      '#00209F', '#00209F', '#00209F',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#009543', '#009543', '#009543',
    ],
  },

  // Eswatini: 3 blue, 3 yellow, 3 blue = 9 rows
  'SZ': {
    name: 'Eswatini',
    emoji: '🇸🇿',
    rows: [
      '#3E5EB9', '#3E5EB9', '#3E5EB9',
      '#FDC300', '#FDC300', '#FDC300',
      '#3E5EB9', '#3E5EB9', '#3E5EB9',
    ],
  },

  // Madagascar: 3 white, 3 red, 3 green = 9 rows
  'MG': {
    name: 'Madagascar',
    emoji: '🇲🇬',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#FC3D32', '#FC3D32', '#FC3D32',
      '#007E3A', '#007E3A', '#007E3A',
    ],
  },

  // Mauritius: 3 red, 2 blue, 2 yellow, 2 green = 9 rows
  'MU': {
    name: 'Mauritius',
    emoji: '🇲🇺',
    rows: [
      '#EA2839', '#EA2839', '#EA2839',
      '#1A206D', '#1A206D',
      '#FFD500', '#FFD500',
      '#00A650', '#00A650',
    ],
  },

  // Seychelles: 3 blue, 3 yellow, 3 red = 9 rows
  'SC': {
    name: 'Seychelles',
    emoji: '🇸🇨',
    rows: [
      '#003D88', '#003D88', '#003D88',
      '#FCD856', '#FCD856', '#FCD856',
      '#D92223', '#D92223', '#D92223',
    ],
  },

  // Comoros: 4 yellow, 1 white, 4 red/blue = 9 rows
  'KM': {
    name: 'Comoros',
    emoji: '🇰🇲',
    rows: [
      '#FFC61E', '#FFC61E', '#FFC61E', '#FFC61E',
      '#FFFFFF',
      '#CE1126', '#3A75C4', '#3A75C4', '#3A75C4',
    ],
  },

  // South Africa: complex pattern = 9 rows
  'ZA': {
    name: 'South Africa',
    emoji: '🇿🇦',
    rows: [
      '#E03C31', '#E03C31',
      '#FFFFFF',
      '#007749', '#FFB81C', '#007749',
      '#000000',
      '#FFFFFF',
      '#001489',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // NORTH AFRICA
  // ═══════════════════════════════════════════════════════════════

  // Libya: 3 red, 1 black, 3 green, 1 white, 3 black = 11 rows
  'LY': {
    name: 'Libya',
    emoji: '🇱🇾',
    rows: [
      '#E70013', '#E70013', '#E70013',
      '#000000',
      '#239E46', '#239E46', '#239E46',
      '#FFFFFF',
      '#000000', '#000000', '#000000',
    ],
  },

  // Sudan: 3 red, 3 white, 3 black = 9 rows
  'SD': {
    name: 'Sudan',
    emoji: '🇸🇩',
    rows: [
      '#D21034', '#D21034', '#D21034',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#000000', '#000000', '#000000',
    ],
  },

  // Mauritania: 3 green, 3 yellow, 3 green = 9 rows
  'MR': {
    name: 'Mauritania',
    emoji: '🇲🇷',
    rows: [
      '#00A95C', '#00A95C', '#00A95C',
      '#FFC400', '#FFC400', '#FFC400',
      '#00A95C', '#00A95C', '#00A95C',
    ],
  },

  // Morocco: red with green star = 9 rows
  'MA': {
    name: 'Morocco',
    emoji: '🇲🇦',
    rows: [
      '#C1272D', '#C1272D', '#C1272D', '#C1272D',
      '#006233',
      '#C1272D', '#C1272D', '#C1272D', '#C1272D',
    ],
  },

  // Tunisia: red with white circle = 9 rows
  'TN': {
    name: 'Tunisia',
    emoji: '🇹🇳',
    rows: [
      '#E70013', '#E70013', '#E70013', '#E70013',
      '#FFFFFF',
      '#E70013', '#E70013', '#E70013', '#E70013',
    ],
  },

  // Egypt: 3 red, 3 white, 3 black = 9 rows
  'EG': {
    name: 'Egypt',
    emoji: '🇪🇬',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#000000', '#000000', '#000000',
    ],
  },

  // Algeria: 4 green, 1 red/white, 4 white = 9 rows
  'DZ': {
    name: 'Algeria',
    emoji: '🇩🇿',
    rows: [
      '#006233', '#006233', '#006233', '#006233',
      '#D21034',
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // WEST AFRICA
  // ═══════════════════════════════════════════════════════════════

  // Nigeria: 3 green, 3 white, 3 green = 9 rows
  'NG': {
    name: 'Nigeria',
    emoji: '🇳🇬',
    rows: [
      '#008751', '#008751', '#008751',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#008751', '#008751', '#008751',
    ],
  },

  // Ghana: 3 red, 3 gold (with star), 3 green = 9 rows
  'GH': {
    name: 'Ghana',
    emoji: '🇬🇭',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FCD116', '#000000', '#FCD116',
      '#006B3F', '#006B3F', '#006B3F',
    ],
  },

  // Senegal: 3 green, 3 gold (with star), 3 red = 9 rows
  'SN': {
    name: 'Senegal',
    emoji: '🇸🇳',
    rows: [
      '#00853F', '#00853F', '#00853F',
      '#FDEF42', '#00853F', '#FDEF42',
      '#E31B23', '#E31B23', '#E31B23',
    ],
  },

  // Ivory Coast: 3 orange, 3 white, 3 green = 9 rows
  'CI': {
    name: 'Ivory Coast',
    emoji: '🇨🇮',
    rows: [
      '#F77F00', '#F77F00', '#F77F00',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#009E60', '#009E60', '#009E60',
    ],
  },

  // Cameroon: 3 green, 3 red (with star), 3 yellow = 9 rows
  'CM': {
    name: 'Cameroon',
    emoji: '🇨🇲',
    rows: [
      '#007A5E', '#007A5E', '#007A5E',
      '#CE1126', '#FCD116', '#CE1126',
      '#FCD116', '#FCD116', '#FCD116',
    ],
  },

  // Mali: 3 green, 3 gold, 3 red = 9 rows
  'ML': {
    name: 'Mali',
    emoji: '🇲🇱',
    rows: [
      '#14B53A', '#14B53A', '#14B53A',
      '#FCD116', '#FCD116', '#FCD116',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Burkina Faso: 4 red, 1 star, 4 green = 9 rows
  'BF': {
    name: 'Burkina Faso',
    emoji: '🇧🇫',
    rows: [
      '#EF2B2D', '#EF2B2D', '#EF2B2D', '#EF2B2D',
      '#FCD116',
      '#009E49', '#009E49', '#009E49', '#009E49',
    ],
  },

  // Guinea: 3 red, 3 yellow, 3 green = 9 rows
  'GN': {
    name: 'Guinea',
    emoji: '🇬🇳',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FCD116', '#FCD116', '#FCD116',
      '#009460', '#009460', '#009460',
    ],
  },

  // Sierra Leone: 3 green, 3 white, 3 blue = 9 rows
  'SL': {
    name: 'Sierra Leone',
    emoji: '🇸🇱',
    rows: [
      '#1EB53A', '#1EB53A', '#1EB53A',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#0072C6', '#0072C6', '#0072C6',
    ],
  },

  // Liberia: stripes pattern = 11 rows
  'LR': {
    name: 'Liberia',
    emoji: '🇱🇷',
    rows: [
      '#BF0A30', '#FFFFFF',
      '#BF0A30', '#FFFFFF',
      '#002868', '#002868', '#002868',
      '#FFFFFF', '#BF0A30',
      '#FFFFFF', '#BF0A30',
    ],
  },

  // Togo: 3 green/yellow, 3 red, 3 green/yellow = 9 rows
  'TG': {
    name: 'Togo',
    emoji: '🇹🇬',
    rows: [
      '#006A4E', '#FFC72C', '#006A4E',
      '#D21034', '#D21034', '#D21034',
      '#006A4E', '#FFC72C', '#006A4E',
    ],
  },

  // Benin: 3 green, 3 yellow, 3 red = 9 rows
  'BJ': {
    name: 'Benin',
    emoji: '🇧🇯',
    rows: [
      '#008751', '#008751', '#008751',
      '#FCD116', '#FCD116', '#FCD116',
      '#E8112D', '#E8112D', '#E8112D',
    ],
  },

  // Gambia: 3 red, 1 white, 3 blue, 1 white, 3 green = 11 rows
  'GM': {
    name: 'Gambia',
    emoji: '🇬🇲',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF',
      '#0C1C8C', '#0C1C8C', '#0C1C8C',
      '#FFFFFF',
      '#3A7728', '#3A7728', '#3A7728',
    ],
  },

  // Niger: 3 orange, 3 white (with circle), 3 green = 9 rows
  'NE': {
    name: 'Niger',
    emoji: '🇳🇪',
    rows: [
      '#E05206', '#E05206', '#E05206',
      '#FFFFFF', '#E05206', '#FFFFFF',
      '#0DB02B', '#0DB02B', '#0DB02B',
    ],
  },

  // Cape Verde: 4 blue, 1 white/red, 4 blue = 9 rows
  'CV': {
    name: 'Cape Verde',
    emoji: '🇨🇻',
    rows: [
      '#003893', '#003893', '#003893', '#003893',
      '#FFFFFF', '#CF2027', '#FFFFFF',
      '#003893', '#003893',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CARIBBEAN
  // ═══════════════════════════════════════════════════════════════

  // Jamaica: diagonal pattern approximation = 9 rows
  'JM': {
    name: 'Jamaica',
    emoji: '🇯🇲',
    rows: [
      '#009B3A', '#009B3A',
      '#FED100',
      '#000000', '#000000', '#000000',
      '#FED100',
      '#009B3A', '#009B3A',
    ],
  },

  // Haiti: 4 blue, 1 white, 4 red = 9 rows
  'HT': {
    name: 'Haiti',
    emoji: '🇭🇹',
    rows: [
      '#00209F', '#00209F', '#00209F', '#00209F',
      '#FFFFFF',
      '#D21034', '#D21034', '#D21034', '#D21034',
    ],
  },

  // Trinidad: 3 red, 1 white, 3 black, 1 white, 3 red = 11 rows
  'TT': {
    name: 'Trinidad',
    emoji: '🇹🇹',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF',
      '#000000', '#000000', '#000000',
      '#FFFFFF',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Barbados: 3 blue, 3 gold (with trident), 3 blue = 9 rows
  'BB': {
    name: 'Barbados',
    emoji: '🇧🇧',
    rows: [
      '#00267F', '#00267F', '#00267F',
      '#FFC726', '#000000', '#FFC726',
      '#00267F', '#00267F', '#00267F',
    ],
  },

  // Bahamas: 3 aqua, 3 gold, 3 aqua with black triangle = 9 rows
  'BS': {
    name: 'Bahamas',
    emoji: '🇧🇸',
    rows: [
      '#00778B', '#00778B', '#00778B',
      '#FFC72C', '#FFC72C', '#FFC72C',
      '#000000', '#000000', '#000000',
    ],
  },

  // St. Lucia: 4 blue, 1 black/white/yellow, 4 blue = 9 rows
  'LC': {
    name: 'St. Lucia',
    emoji: '🇱🇨',
    rows: [
      '#65CFFF', '#65CFFF', '#65CFFF', '#65CFFF',
      '#FCD116',
      '#65CFFF', '#65CFFF', '#65CFFF', '#65CFFF',
    ],
  },

  // Grenada: red border with green/yellow = 11 rows
  'GD': {
    name: 'Grenada',
    emoji: '🇬🇩',
    rows: [
      '#CE1126', '#CE1126',
      '#FCD116', '#FCD116',
      '#007A5E', '#007A5E', '#007A5E',
      '#FCD116', '#FCD116',
      '#CE1126', '#CE1126',
    ],
  },

  // Antigua: 3 black, 3 blue/white/yellow, 3 red = 9 rows
  'AG': {
    name: 'Antigua',
    emoji: '🇦🇬',
    rows: [
      '#000000', '#000000', '#000000',
      '#0072C6', '#FFFFFF', '#FCD116',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Dominica: 3 green, 3 cross colors, 3 green = 9 rows
  'DM': {
    name: 'Dominica',
    emoji: '🇩🇲',
    rows: [
      '#006B3F', '#006B3F', '#006B3F',
      '#FCD116', '#D41C30', '#000000',
      '#006B3F', '#006B3F', '#006B3F',
    ],
  },

  // Cuba: blue/white stripes with red triangle = 9 rows
  'CU': {
    name: 'Cuba',
    emoji: '🇨🇺',
    rows: [
      '#002A8F', '#FFFFFF',
      '#002A8F', '#FFFFFF',
      '#CB1515',
      '#FFFFFF', '#002A8F',
      '#FFFFFF', '#002A8F',
    ],
  },

  // Dominican Republic: blue/red with white cross = 9 rows
  'DO': {
    name: 'Dominican Rep.',
    emoji: '🇩🇴',
    rows: [
      '#002D62', '#002D62', '#FFFFFF',
      '#002D62', '#FFFFFF', '#CE1126',
      '#FFFFFF', '#CE1126', '#CE1126',
    ],
  },

  // Puerto Rico: blue/white/red stripes = 9 rows
  'PR': {
    name: 'Puerto Rico',
    emoji: '🇵🇷',
    rows: [
      '#ED0000', '#FFFFFF',
      '#ED0000', '#FFFFFF',
      '#0050F0',
      '#FFFFFF', '#ED0000',
      '#FFFFFF', '#ED0000',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // CENTRAL AMERICA
  // ═══════════════════════════════════════════════════════════════

  // Guatemala: 4 blue, 1 white, 4 blue = 9 rows
  'GT': {
    name: 'Guatemala',
    emoji: '🇬🇹',
    rows: [
      '#4997D0', '#4997D0', '#4997D0', '#4997D0',
      '#FFFFFF',
      '#4997D0', '#4997D0', '#4997D0', '#4997D0',
    ],
  },

  // Belize: 3 blue, 3 white, 3 blue = 9 rows
  'BZ': {
    name: 'Belize',
    emoji: '🇧🇿',
    rows: [
      '#003F87', '#003F87', '#003F87',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#003F87', '#003F87', '#003F87',
    ],
  },

  // Honduras: 4 blue, 1 white, 4 blue = 9 rows
  'HN': {
    name: 'Honduras',
    emoji: '🇭🇳',
    rows: [
      '#0073CF', '#0073CF', '#0073CF', '#0073CF',
      '#FFFFFF',
      '#0073CF', '#0073CF', '#0073CF', '#0073CF',
    ],
  },

  // El Salvador: 4 blue, 1 white, 4 blue = 9 rows
  'SV': {
    name: 'El Salvador',
    emoji: '🇸🇻',
    rows: [
      '#0F47AF', '#0F47AF', '#0F47AF', '#0F47AF',
      '#FFFFFF',
      '#0F47AF', '#0F47AF', '#0F47AF', '#0F47AF',
    ],
  },

  // Nicaragua: 4 blue, 1 white, 4 blue = 9 rows
  'NI': {
    name: 'Nicaragua',
    emoji: '🇳🇮',
    rows: [
      '#0067C6', '#0067C6', '#0067C6', '#0067C6',
      '#FFFFFF',
      '#0067C6', '#0067C6', '#0067C6', '#0067C6',
    ],
  },

  // Costa Rica: 2 blue, 2 white, 3 red, 2 white, 2 blue = 11 rows
  'CR': {
    name: 'Costa Rica',
    emoji: '🇨🇷',
    rows: [
      '#002B7F', '#002B7F',
      '#FFFFFF', '#FFFFFF',
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF', '#FFFFFF',
      '#002B7F', '#002B7F',
    ],
  },

  // Panama: 3 white/blue, 3 red/white, 3 blue = 9 rows
  'PA': {
    name: 'Panama',
    emoji: '🇵🇦',
    rows: [
      '#FFFFFF', '#005293', '#005293',
      '#DA121A', '#FFFFFF', '#FFFFFF',
      '#DA121A', '#DA121A', '#005293',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // SOUTH AMERICA
  // ═══════════════════════════════════════════════════════════════

  // Guyana: 3 green, 3 gold/red, 3 green = 9 rows
  'GY': {
    name: 'Guyana',
    emoji: '🇬🇾',
    rows: [
      '#009E49', '#009E49', '#009E49',
      '#FCD116', '#CE1126', '#FCD116',
      '#009E49', '#009E49', '#009E49',
    ],
  },

  // Venezuela: 3 yellow, 3 blue, 3 red = 9 rows
  'VE': {
    name: 'Venezuela',
    emoji: '🇻🇪',
    rows: [
      '#FFCC00', '#FFCC00', '#FFCC00',
      '#00247D', '#00247D', '#00247D',
      '#CF142B', '#CF142B', '#CF142B',
    ],
  },

  // Brazil: 2 green, 5 yellow (with blue), 2 green = 9 rows
  'BR': {
    name: 'Brazil',
    emoji: '🇧🇷',
    rows: [
      '#009C3B', '#009C3B',
      '#FFDF00', '#FFDF00', '#002776', '#FFDF00', '#FFDF00',
      '#009C3B', '#009C3B',
    ],
  },

  // Suriname: 3 green, 1 white, 3 red, 1 white, 3 green = 11 rows
  'SR': {
    name: 'Suriname',
    emoji: '🇸🇷',
    rows: [
      '#377E3F', '#377E3F', '#377E3F',
      '#FFFFFF',
      '#B40A2D', '#B40A2D', '#B40A2D',
      '#FFFFFF',
      '#377E3F', '#377E3F', '#377E3F',
    ],
  },

  // Colombia: 4 yellow, 2 blue, 3 red = 9 rows (per flag proportions)
  'CO': {
    name: 'Colombia',
    emoji: '🇨🇴',
    rows: [
      '#FCD116', '#FCD116', '#FCD116', '#FCD116', '#FCD116',
      '#003893', '#003893',
      '#CE1126', '#CE1126',
    ],
  },

  // Ecuador: 4 yellow, 2 blue, 3 red = 9 rows
  'EC': {
    name: 'Ecuador',
    emoji: '🇪🇨',
    rows: [
      '#FFD100', '#FFD100', '#FFD100', '#FFD100', '#FFD100',
      '#0072CE', '#0072CE',
      '#EF3340', '#EF3340',
    ],
  },

  // Peru: 3 red, 3 white, 3 red = 9 rows
  'PE': {
    name: 'Peru',
    emoji: '🇵🇪',
    rows: [
      '#D91023', '#D91023', '#D91023',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#D91023', '#D91023', '#D91023',
    ],
  },

  // Bolivia: 3 red, 3 yellow, 3 green = 9 rows
  'BO': {
    name: 'Bolivia',
    emoji: '🇧🇴',
    rows: [
      '#D52B1E', '#D52B1E', '#D52B1E',
      '#F9E300', '#F9E300', '#F9E300',
      '#007934', '#007934', '#007934',
    ],
  },

  // Paraguay: 3 red, 3 white, 3 blue = 9 rows
  'PY': {
    name: 'Paraguay',
    emoji: '🇵🇾',
    rows: [
      '#D52B1E', '#D52B1E', '#D52B1E',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#0038A8', '#0038A8', '#0038A8',
    ],
  },

  // Chile: blue/white over red = 9 rows
  'CL': {
    name: 'Chile',
    emoji: '🇨🇱',
    rows: [
      '#0039A6', '#FFFFFF', '#FFFFFF',
      '#0039A6', '#FFFFFF', '#FFFFFF',
      '#D52B1E', '#D52B1E', '#D52B1E',
    ],
  },

  // Argentina: 3 blue, 3 white, 3 blue = 9 rows
  'AR': {
    name: 'Argentina',
    emoji: '🇦🇷',
    rows: [
      '#74ACDF', '#74ACDF', '#74ACDF',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#74ACDF', '#74ACDF', '#74ACDF',
    ],
  },

  // Uruguay: blue/white stripes = 9 rows
  'UY': {
    name: 'Uruguay',
    emoji: '🇺🇾',
    rows: [
      '#0038A8', '#FFFFFF',
      '#0038A8', '#FFFFFF',
      '#FCD116',
      '#FFFFFF', '#0038A8',
      '#FFFFFF', '#0038A8',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // NORTH AMERICA
  // ═══════════════════════════════════════════════════════════════

  // USA: red/white stripes with blue = 11 rows
  'US': {
    name: 'USA',
    emoji: '🇺🇸',
    rows: [
      '#B22234', '#FFFFFF',
      '#B22234', '#FFFFFF',
      '#3C3B6E', '#3C3B6E', '#3C3B6E',
      '#FFFFFF', '#B22234',
      '#FFFFFF', '#B22234',
    ],
  },

  // Mexico: 3 green, 3 white, 3 red = 9 rows
  'MX': {
    name: 'Mexico',
    emoji: '🇲🇽',
    rows: [
      '#006847', '#006847', '#006847',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Canada: 2 red, 5 white (with maple), 2 red = 9 rows
  'CA': {
    name: 'Canada',
    emoji: '🇨🇦',
    rows: [
      '#FF0000', '#FF0000',
      '#FFFFFF', '#FFFFFF', '#FF0000', '#FFFFFF', '#FFFFFF',
      '#FF0000', '#FF0000',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // EUROPE
  // ═══════════════════════════════════════════════════════════════

  // England: white with red cross = 9 rows
  'GB': {
    name: 'England',
    emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#CE1126',
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // France: 3 blue, 3 white, 3 red = 9 rows
  'FR': {
    name: 'France',
    emoji: '🇫🇷',
    rows: [
      '#002395', '#002395', '#002395',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#ED2939', '#ED2939', '#ED2939',
    ],
  },

  // Germany: 3 black, 3 red, 3 gold = 9 rows
  'DE': {
    name: 'Germany',
    emoji: '🇩🇪',
    rows: [
      '#000000', '#000000', '#000000',
      '#DD0000', '#DD0000', '#DD0000',
      '#FFCC00', '#FFCC00', '#FFCC00',
    ],
  },

  // Spain: 2 red, 5 yellow, 2 red = 9 rows
  'ES': {
    name: 'Spain',
    emoji: '🇪🇸',
    rows: [
      '#AA151B', '#AA151B',
      '#F1BF00', '#F1BF00', '#F1BF00', '#F1BF00', '#F1BF00',
      '#AA151B', '#AA151B',
    ],
  },

  // Portugal: 3 green, 6 red = 9 rows
  'PT': {
    name: 'Portugal',
    emoji: '🇵🇹',
    rows: [
      '#006600', '#006600', '#006600',
      '#FE0000', '#FE0000', '#FE0000',
      '#FE0000', '#FE0000', '#FE0000',
    ],
  },

  // Netherlands: 3 red, 3 white, 3 blue = 9 rows
  'NL': {
    name: 'Netherlands',
    emoji: '🇳🇱',
    rows: [
      '#AE1C28', '#AE1C28', '#AE1C28',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#21468B', '#21468B', '#21468B',
    ],
  },

  // Belgium: 3 black, 3 yellow, 3 red = 9 rows
  'BE': {
    name: 'Belgium',
    emoji: '🇧🇪',
    rows: [
      '#000000', '#000000', '#000000',
      '#FAE042', '#FAE042', '#FAE042',
      '#ED2939', '#ED2939', '#ED2939',
    ],
  },

  // Italy: 3 green, 3 white, 3 red = 9 rows
  'IT': {
    name: 'Italy',
    emoji: '🇮🇹',
    rows: [
      '#009344', '#009344', '#009344',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#CF2734', '#CF2734', '#CF2734',
    ],
  },

  // Austria: 3 red, 3 white, 3 red = 9 rows
  'AT': {
    name: 'Austria',
    emoji: '🇦🇹',
    rows: [
      '#ED2939', '#ED2939', '#ED2939',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#ED2939', '#ED2939', '#ED2939',
    ],
  },

  // Ireland: 3 green, 3 white, 3 orange = 9 rows
  'IE': {
    name: 'Ireland',
    emoji: '🇮🇪',
    rows: [
      '#169B62', '#169B62', '#169B62',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#FF883E', '#FF883E', '#FF883E',
    ],
  },

  // Finland: 4 white, 1 blue, 4 white = 9 rows
  'FI': {
    name: 'Finland',
    emoji: '🇫🇮',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#003580',
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // Sweden: 4 blue, 1 yellow, 4 blue = 9 rows
  'SE': {
    name: 'Sweden',
    emoji: '🇸🇪',
    rows: [
      '#006AA7', '#006AA7', '#006AA7', '#006AA7',
      '#FECC00',
      '#006AA7', '#006AA7', '#006AA7', '#006AA7',
    ],
  },

  // Norway: 3 red, 1 white/blue, 3 red = 9 rows
  'NO': {
    name: 'Norway',
    emoji: '🇳🇴',
    rows: [
      '#BA0C2F', '#BA0C2F', '#BA0C2F', '#BA0C2F',
      '#00205B',
      '#BA0C2F', '#BA0C2F', '#BA0C2F', '#BA0C2F',
    ],
  },

  // Denmark: red with white cross = 9 rows
  'DK': {
    name: 'Denmark',
    emoji: '🇩🇰',
    rows: [
      '#C8102E', '#C8102E', '#C8102E', '#C8102E',
      '#FFFFFF',
      '#C8102E', '#C8102E', '#C8102E', '#C8102E',
    ],
  },

  // Greece: blue/white stripes = 9 rows
  'GR': {
    name: 'Greece',
    emoji: '🇬🇷',
    rows: [
      '#0D5EAF', '#FFFFFF',
      '#0D5EAF', '#FFFFFF',
      '#0D5EAF', '#FFFFFF',
      '#0D5EAF', '#FFFFFF',
      '#0D5EAF',
    ],
  },

  // Turkey: red with white star/crescent = 9 rows
  'TR': {
    name: 'Turkey',
    emoji: '🇹🇷',
    rows: [
      '#E30A17', '#E30A17', '#E30A17', '#E30A17',
      '#FFFFFF',
      '#E30A17', '#E30A17', '#E30A17', '#E30A17',
    ],
  },

  // Croatia: 3 red, 3 white, 3 blue = 9 rows
  'HR': {
    name: 'Croatia',
    emoji: '🇭🇷',
    rows: [
      '#FF0000', '#FF0000', '#FF0000',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#171796', '#171796', '#171796',
    ],
  },

  // Poland: 4 white, 5 red = 9 rows
  'PL': {
    name: 'Poland',
    emoji: '🇵🇱',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#DC143C', '#DC143C', '#DC143C', '#DC143C', '#DC143C',
    ],
  },

  // Switzerland: red with white cross = 9 rows
  'CH': {
    name: 'Switzerland',
    emoji: '🇨🇭',
    rows: [
      '#DA291C', '#DA291C', '#DA291C', '#DA291C',
      '#FFFFFF',
      '#DA291C', '#DA291C', '#DA291C', '#DA291C',
    ],
  },

  // Czech Republic: 3 white, 3 red, 3 blue = 9 rows
  'CZ': {
    name: 'Czech Republic',
    emoji: '🇨🇿',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#D7141A', '#D7141A', '#D7141A',
      '#11457E', '#11457E', '#11457E',
    ],
  },

  // Romania: 3 blue, 3 yellow, 3 red = 9 rows
  'RO': {
    name: 'Romania',
    emoji: '🇷🇴',
    rows: [
      '#002B7F', '#002B7F', '#002B7F',
      '#FCD116', '#FCD116', '#FCD116',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Hungary: 3 red, 3 white, 3 green = 9 rows
  'HU': {
    name: 'Hungary',
    emoji: '🇭🇺',
    rows: [
      '#CE2939', '#CE2939', '#CE2939',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#477050', '#477050', '#477050',
    ],
  },

  // Ukraine: 4 blue, 5 yellow = 9 rows
  'UA': {
    name: 'Ukraine',
    emoji: '🇺🇦',
    rows: [
      '#005BBB', '#005BBB', '#005BBB', '#005BBB',
      '#FFD500', '#FFD500', '#FFD500', '#FFD500', '#FFD500',
    ],
  },

  // Bulgaria: 3 white, 3 green, 3 red = 9 rows
  'BG': {
    name: 'Bulgaria',
    emoji: '🇧🇬',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#00966E', '#00966E', '#00966E',
      '#D62612', '#D62612', '#D62612',
    ],
  },

  // Serbia: 3 red, 3 blue, 3 white = 9 rows
  'RS': {
    name: 'Serbia',
    emoji: '🇷🇸',
    rows: [
      '#C8102E', '#C8102E', '#C8102E',
      '#0C4076', '#0C4076', '#0C4076',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // Slovakia: 3 white, 3 blue, 3 red = 9 rows
  'SK': {
    name: 'Slovakia',
    emoji: '🇸🇰',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#0B4EA2', '#0B4EA2', '#0B4EA2',
      '#EE1C25', '#EE1C25', '#EE1C25',
    ],
  },

  // Slovenia: 3 white, 3 blue, 3 red = 9 rows
  'SI': {
    name: 'Slovenia',
    emoji: '🇸🇮',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#005DA4', '#005DA4', '#005DA4',
      '#ED1C24', '#ED1C24', '#ED1C24',
    ],
  },

  // Lithuania: 3 yellow, 3 green, 3 red = 9 rows
  'LT': {
    name: 'Lithuania',
    emoji: '🇱🇹',
    rows: [
      '#FDB913', '#FDB913', '#FDB913',
      '#006A44', '#006A44', '#006A44',
      '#C1272D', '#C1272D', '#C1272D',
    ],
  },

  // Latvia: 3 maroon, 3 white, 3 maroon = 9 rows
  'LV': {
    name: 'Latvia',
    emoji: '🇱🇻',
    rows: [
      '#9E3039', '#9E3039', '#9E3039',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#9E3039', '#9E3039', '#9E3039',
    ],
  },

  // Estonia: 3 blue, 3 black, 3 white = 9 rows
  'EE': {
    name: 'Estonia',
    emoji: '🇪🇪',
    rows: [
      '#0072CE', '#0072CE', '#0072CE',
      '#000000', '#000000', '#000000',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // Luxembourg: 3 red, 3 white, 3 blue = 9 rows
  'LU': {
    name: 'Luxembourg',
    emoji: '🇱🇺',
    rows: [
      '#ED2939', '#ED2939', '#ED2939',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#00A1DE', '#00A1DE', '#00A1DE',
    ],
  },

  // Malta: 4 white, 1 gray, 4 red = 9 rows
  'MT': {
    name: 'Malta',
    emoji: '🇲🇹',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#7F7F7F',
      '#CF142B', '#CF142B', '#CF142B', '#CF142B',
    ],
  },

  // Cyprus: 9 white rows = 9 rows
  'CY': {
    name: 'Cyprus',
    emoji: '🇨🇾',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#D57800', '#D57800', '#D57800',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // Iceland: 3 blue, 1 white/red, 3 blue = 9 rows
  'IS': {
    name: 'Iceland',
    emoji: '🇮🇸',
    rows: [
      '#02529C', '#02529C', '#02529C', '#02529C',
      '#DC1E35',
      '#02529C', '#02529C', '#02529C', '#02529C',
    ],
  },

  // Albania: red with black eagle = 9 rows
  'AL': {
    name: 'Albania',
    emoji: '🇦🇱',
    rows: [
      '#E41E20', '#E41E20', '#E41E20', '#E41E20',
      '#000000',
      '#E41E20', '#E41E20', '#E41E20', '#E41E20',
    ],
  },

  // North Macedonia: red with yellow sun = 9 rows
  'MK': {
    name: 'North Macedonia',
    emoji: '🇲🇰',
    rows: [
      '#D20000', '#D20000', '#D20000', '#D20000',
      '#FFE600',
      '#D20000', '#D20000', '#D20000', '#D20000',
    ],
  },

  // Bosnia and Herzegovina: 3 blue, 3 yellow, 3 blue = 9 rows
  'BA': {
    name: 'Bosnia Herzegovina',
    emoji: '🇧🇦',
    rows: [
      '#002395', '#002395', '#002395',
      '#FCD116', '#FCD116', '#FCD116',
      '#002395', '#002395', '#002395',
    ],
  },

  // Montenegro: red with gold border = 9 rows
  'ME': {
    name: 'Montenegro',
    emoji: '🇲🇪',
    rows: [
      '#C40308', '#C40308', '#C40308',
      '#D4AF37', '#D4AF37', '#D4AF37',
      '#C40308', '#C40308', '#C40308',
    ],
  },

  // Moldova: 3 blue, 3 yellow, 3 red = 9 rows
  'MD': {
    name: 'Moldova',
    emoji: '🇲🇩',
    rows: [
      '#003DA5', '#003DA5', '#003DA5',
      '#FFD200', '#FFD200', '#FFD200',
      '#CC092F', '#CC092F', '#CC092F',
    ],
  },

  // Kosovo: 3 blue, 3 yellow, 3 blue = 9 rows
  'XK': {
    name: 'Kosovo',
    emoji: '🇽🇰',
    rows: [
      '#244AA5', '#244AA5', '#244AA5',
      '#D0A650', '#D0A650', '#D0A650',
      '#244AA5', '#244AA5', '#244AA5',
    ],
  },

  // Belarus: red/green with pattern = 9 rows
  'BY': {
    name: 'Belarus',
    emoji: '🇧🇾',
    rows: [
      '#CE1720', '#CE1720', '#CE1720',
      '#CE1720', '#CE1720', '#CE1720',
      '#007C30', '#007C30', '#007C30',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ASIA
  // ═══════════════════════════════════════════════════════════════

  // Japan: white with red sun = 9 rows
  'JP': {
    name: 'Japan',
    emoji: '🇯🇵',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#BC002D',
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // South Korea: 3 white, 3 red/blue, 3 white = 9 rows
  'KR': {
    name: 'South Korea',
    emoji: '🇰🇷',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#CD2E3A', '#FFFFFF', '#0047A0',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // China: all red with yellow stars = 9 rows
  'CN': {
    name: 'China',
    emoji: '🇨🇳',
    rows: [
      '#DE2910', '#DE2910', '#DE2910',
      '#DE2910', '#FFDE00', '#DE2910',
      '#DE2910', '#DE2910', '#DE2910',
    ],
  },

  // India: 3 saffron, 3 white, 3 green = 9 rows
  'IN': {
    name: 'India',
    emoji: '🇮🇳',
    rows: [
      '#FF9933', '#FF9933', '#FF9933',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#138808', '#138808', '#138808',
    ],
  },

  // Indonesia: 4 red, 5 white = 9 rows
  'ID': {
    name: 'Indonesia',
    emoji: '🇮🇩',
    rows: [
      '#FF0000', '#FF0000', '#FF0000', '#FF0000',
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // Pakistan: green with white = 9 rows
  'PK': {
    name: 'Pakistan',
    emoji: '🇵🇰',
    rows: [
      '#01411C', '#01411C', '#01411C',
      '#01411C', '#FFFFFF', '#01411C',
      '#01411C', '#01411C', '#01411C',
    ],
  },

  // Bangladesh: green with red circle = 9 rows
  'BD': {
    name: 'Bangladesh',
    emoji: '🇧🇩',
    rows: [
      '#006A4E', '#006A4E', '#006A4E', '#006A4E',
      '#F42A41',
      '#006A4E', '#006A4E', '#006A4E', '#006A4E',
    ],
  },

  // Philippines: 4 blue, 1 white, 4 red = 9 rows
  'PH': {
    name: 'Philippines',
    emoji: '🇵🇭',
    rows: [
      '#0038A8', '#0038A8', '#0038A8', '#0038A8',
      '#FFFFFF',
      '#CE1126', '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Vietnam: red with yellow star = 9 rows
  'VN': {
    name: 'Vietnam',
    emoji: '🇻🇳',
    rows: [
      '#DA251D', '#DA251D', '#DA251D', '#DA251D',
      '#FFCD00',
      '#DA251D', '#DA251D', '#DA251D', '#DA251D',
    ],
  },

  // Thailand: 2 red, 2 white, 3 blue, 2 white, 2 red = 11 rows
  'TH': {
    name: 'Thailand',
    emoji: '🇹🇭',
    rows: [
      '#A51931', '#A51931',
      '#FFFFFF', '#FFFFFF',
      '#2D2A4A', '#2D2A4A', '#2D2A4A',
      '#FFFFFF', '#FFFFFF',
      '#A51931', '#A51931',
    ],
  },

  // Myanmar: 3 yellow, 3 green, 3 red = 9 rows
  'MM': {
    name: 'Myanmar',
    emoji: '🇲🇲',
    rows: [
      '#FECB00', '#FECB00', '#FECB00',
      '#34B233', '#34B233', '#34B233',
      '#EA2839', '#EA2839', '#EA2839',
    ],
  },

  // Malaysia: red/white stripes with blue = 9 rows
  'MY': {
    name: 'Malaysia',
    emoji: '🇲🇾',
    rows: [
      '#DC241F', '#FFFFFF',
      '#DC241F', '#FFFFFF',
      '#010066',
      '#FFFFFF', '#DC241F',
      '#FFFFFF', '#DC241F',
    ],
  },

  // Nepal: unique double pennant = 9 rows
  'NP': {
    name: 'Nepal',
    emoji: '🇳🇵',
    rows: [
      '#DC143C', '#DC143C', '#DC143C',
      '#003893', '#FFFFFF', '#003893',
      '#DC143C', '#DC143C', '#DC143C',
    ],
  },

  // Sri Lanka: 3 saffron, 3 green, 3 maroon = 9 rows
  'LK': {
    name: 'Sri Lanka',
    emoji: '🇱🇰',
    rows: [
      '#FF9900', '#FF9900', '#FF9900',
      '#006B3F', '#006B3F', '#006B3F',
      '#8D153A', '#8D153A', '#8D153A',
    ],
  },

  // Cambodia: 3 blue, 3 red, 3 blue = 9 rows
  'KH': {
    name: 'Cambodia',
    emoji: '🇰🇭',
    rows: [
      '#032EA1', '#032EA1', '#032EA1',
      '#E00025', '#E00025', '#E00025',
      '#032EA1', '#032EA1', '#032EA1',
    ],
  },

  // Laos: 3 red, 3 blue, 3 red = 9 rows
  'LA': {
    name: 'Laos',
    emoji: '🇱🇦',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#002868', '#FFFFFF', '#002868',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Singapore: 4 red, 1 white/red, 4 white = 9 rows
  'SG': {
    name: 'Singapore',
    emoji: '🇸🇬',
    rows: [
      '#EF3340', '#EF3340', '#EF3340', '#EF3340',
      '#FFFFFF',
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // Mongolia: 3 red, 3 blue, 3 red = 9 rows
  'MN': {
    name: 'Mongolia',
    emoji: '🇲🇳',
    rows: [
      '#DA2032', '#DA2032', '#DA2032',
      '#015197', '#015197', '#015197',
      '#DA2032', '#DA2032', '#DA2032',
    ],
  },

  // North Korea: 2 blue, 1 white, 3 red, 1 white, 2 blue = 9 rows
  'KP': {
    name: 'North Korea',
    emoji: '🇰🇵',
    rows: [
      '#024FA2', '#024FA2',
      '#FFFFFF',
      '#ED1C27', '#ED1C27', '#ED1C27',
      '#FFFFFF',
      '#024FA2', '#024FA2',
    ],
  },

  // Taiwan: 4 red, 5 red = 9 rows
  'TW': {
    name: 'Taiwan',
    emoji: '🇹🇼',
    rows: [
      '#FE0000', '#FE0000', '#FE0000',
      '#FE0000', '#FE0000', '#FE0000',
      '#FE0000', '#FE0000', '#FE0000',
    ],
  },

  // Bhutan: 4 yellow, 1 orange, 4 orange = 9 rows
  'BT': {
    name: 'Bhutan',
    emoji: '🇧🇹',
    rows: [
      '#FFD520', '#FFD520', '#FFD520', '#FFD520',
      '#FF4E12',
      '#FF4E12', '#FF4E12', '#FF4E12', '#FF4E12',
    ],
  },

  // Brunei: yellow with stripes = 9 rows
  'BN': {
    name: 'Brunei',
    emoji: '🇧🇳',
    rows: [
      '#F7E017', '#F7E017', '#F7E017',
      '#FFFFFF', '#000000', '#FFFFFF',
      '#F7E017', '#F7E017', '#F7E017',
    ],
  },

  // Timor-Leste: 3 red, 3 yellow, 3 black = 9 rows
  'TL': {
    name: 'Timor-Leste',
    emoji: '🇹🇱',
    rows: [
      '#DC241F', '#DC241F', '#DC241F',
      '#FFC72C', '#FFC72C', '#FFC72C',
      '#000000', '#000000', '#000000',
    ],
  },

  // Maldives: red with green = 9 rows
  'MV': {
    name: 'Maldives',
    emoji: '🇲🇻',
    rows: [
      '#D21034', '#D21034', '#D21034',
      '#007E3A', '#007E3A', '#007E3A',
      '#D21034', '#D21034', '#D21034',
    ],
  },

  // Afghanistan: 3 black, 3 red, 3 green = 9 rows
  'AF': {
    name: 'Afghanistan',
    emoji: '🇦🇫',
    rows: [
      '#000000', '#000000', '#000000',
      '#D32011', '#D32011', '#D32011',
      '#007A3D', '#007A3D', '#007A3D',
    ],
  },

  // Kazakhstan: 9 blue rows = 9 rows
  'KZ': {
    name: 'Kazakhstan',
    emoji: '🇰🇿',
    rows: [
      '#00AFCA', '#00AFCA', '#00AFCA',
      '#00AFCA', '#FEC50C', '#00AFCA',
      '#00AFCA', '#00AFCA', '#00AFCA',
    ],
  },

  // Uzbekistan: 3 blue, 3 white, 3 green = 9 rows
  'UZ': {
    name: 'Uzbekistan',
    emoji: '🇺🇿',
    rows: [
      '#1EB53A', '#1EB53A', '#1EB53A',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#0099B5', '#0099B5', '#0099B5',
    ],
  },

  // Turkmenistan: green with patterns = 9 rows
  'TM': {
    name: 'Turkmenistan',
    emoji: '🇹🇲',
    rows: [
      '#00843D', '#00843D', '#00843D',
      '#00843D', '#00843D', '#00843D',
      '#00843D', '#00843D', '#00843D',
    ],
  },

  // Tajikistan: 3 red, 3 white, 3 green = 9 rows
  'TJ': {
    name: 'Tajikistan',
    emoji: '🇹🇯',
    rows: [
      '#CC0000', '#CC0000', '#CC0000',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#006600', '#006600', '#006600',
    ],
  },

  // Kyrgyzstan: red with yellow sun = 9 rows
  'KG': {
    name: 'Kyrgyzstan',
    emoji: '🇰🇬',
    rows: [
      '#EE1C25', '#EE1C25', '#EE1C25', '#EE1C25',
      '#FFEF00',
      '#EE1C25', '#EE1C25', '#EE1C25', '#EE1C25',
    ],
  },

  // Armenia: 3 red, 3 blue, 3 orange = 9 rows
  'AM': {
    name: 'Armenia',
    emoji: '🇦🇲',
    rows: [
      '#D90012', '#D90012', '#D90012',
      '#0033A0', '#0033A0', '#0033A0',
      '#F2A800', '#F2A800', '#F2A800',
    ],
  },

  // Azerbaijan: 3 blue, 3 red, 3 green = 9 rows
  'AZ': {
    name: 'Azerbaijan',
    emoji: '🇦🇿',
    rows: [
      '#00B5E2', '#00B5E2', '#00B5E2',
      '#EF3340', '#EF3340', '#EF3340',
      '#509E2F', '#509E2F', '#509E2F',
    ],
  },

  // Georgia: white with red crosses = 9 rows
  'GE': {
    name: 'Georgia',
    emoji: '🇬🇪',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#FFFFFF', '#FF0000', '#FFFFFF',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // MIDDLE EAST
  // ═══════════════════════════════════════════════════════════════

  // Saudi Arabia: green with white = 9 rows
  'SA': {
    name: 'Saudi Arabia',
    emoji: '🇸🇦',
    rows: [
      '#006C35', '#006C35', '#006C35', '#006C35',
      '#FFFFFF',
      '#006C35', '#006C35', '#006C35', '#006C35',
    ],
  },

  // Iran: 3 green, 3 white, 3 red = 9 rows
  'IR': {
    name: 'Iran',
    emoji: '🇮🇷',
    rows: [
      '#239F40', '#239F40', '#239F40',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#DA0000', '#DA0000', '#DA0000',
    ],
  },

  // Iraq: 3 red, 3 white, 3 black = 9 rows
  'IQ': {
    name: 'Iraq',
    emoji: '🇮🇶',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#000000', '#000000', '#000000',
    ],
  },

  // Syria: 3 red, 3 white, 3 black = 9 rows
  'SY': {
    name: 'Syria',
    emoji: '🇸🇾',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#000000', '#000000', '#000000',
    ],
  },

  // Jordan: 3 black, 3 white, 3 green = 9 rows
  'JO': {
    name: 'Jordan',
    emoji: '🇯🇴',
    rows: [
      '#000000', '#000000', '#000000',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#007A3D', '#007A3D', '#007A3D',
    ],
  },

  // Lebanon: 3 red, 3 white, 3 red = 9 rows
  'LB': {
    name: 'Lebanon',
    emoji: '🇱🇧',
    rows: [
      '#EE161F', '#EE161F', '#EE161F',
      '#FFFFFF', '#00A850', '#FFFFFF',
      '#EE161F', '#EE161F', '#EE161F',
    ],
  },

  // Israel: white with blue stripes = 9 rows
  'IL': {
    name: 'Israel',
    emoji: '🇮🇱',
    rows: [
      '#0038B8', '#0038B8',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#FFFFFF', '#FFFFFF',
      '#0038B8', '#0038B8',
    ],
  },

  // Palestine: 3 black, 3 white, 3 green = 9 rows
  'PS': {
    name: 'Palestine',
    emoji: '🇵🇸',
    rows: [
      '#000000', '#000000', '#000000',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#007A3D', '#007A3D', '#007A3D',
    ],
  },

  // Kuwait: 3 green, 3 white, 3 red = 9 rows
  'KW': {
    name: 'Kuwait',
    emoji: '🇰🇼',
    rows: [
      '#007A3D', '#007A3D', '#007A3D',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Bahrain: red with white = 9 rows
  'BH': {
    name: 'Bahrain',
    emoji: '🇧🇭',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#CE1126', '#CE1126', '#CE1126',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Qatar: maroon with white = 9 rows
  'QA': {
    name: 'Qatar',
    emoji: '🇶🇦',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#8A1538', '#8A1538', '#8A1538',
      '#8A1538', '#8A1538', '#8A1538',
    ],
  },

  // Oman: red/white/green = 9 rows
  'OM': {
    name: 'Oman',
    emoji: '🇴🇲',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#DA291C', '#DA291C', '#DA291C',
      '#008000', '#008000', '#008000',
    ],
  },

  // Yemen: 3 red, 3 white, 3 black = 9 rows
  'YE': {
    name: 'Yemen',
    emoji: '🇾🇪',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#000000', '#000000', '#000000',
    ],
  },

  // United Arab Emirates: 3 green, 3 white, 3 black = 9 rows
  'AE': {
    name: 'UAE',
    emoji: '🇦🇪',
    rows: [
      '#00732F', '#00732F', '#00732F',
      '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#000000', '#000000', '#000000',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // OCEANIA
  // ═══════════════════════════════════════════════════════════════

  // Australia: blue with stars = 9 rows
  'AU': {
    name: 'Australia',
    emoji: '🇦🇺',
    rows: [
      '#00008B', '#00008B', '#00008B', '#00008B',
      '#FFFFFF',
      '#00008B', '#00008B', '#00008B', '#00008B',
    ],
  },

  // New Zealand: blue with stars = 9 rows
  'NZ': {
    name: 'New Zealand',
    emoji: '🇳🇿',
    rows: [
      '#00247D', '#00247D', '#00247D', '#00247D',
      '#FFFFFF',
      '#00247D', '#00247D', '#00247D', '#00247D',
    ],
  },

  // Papua New Guinea: 4 red, 1 yellow, 4 black = 9 rows
  'PG': {
    name: 'Papua New Guinea',
    emoji: '🇵🇬',
    rows: [
      '#CE1126', '#CE1126', '#CE1126', '#CE1126',
      '#FCD116',
      '#000000', '#000000', '#000000', '#000000',
    ],
  },

  // Fiji: light blue = 9 rows
  'FJ': {
    name: 'Fiji',
    emoji: '🇫🇯',
    rows: [
      '#68BFE5', '#68BFE5', '#68BFE5',
      '#68BFE5', '#68BFE5', '#68BFE5',
      '#68BFE5', '#68BFE5', '#68BFE5',
    ],
  },

  // Solomon Islands: 4 blue, 1 yellow, 4 green = 9 rows
  'SB': {
    name: 'Solomon Islands',
    emoji: '🇸🇧',
    rows: [
      '#0051BA', '#0051BA', '#0051BA', '#0051BA',
      '#FCD116',
      '#215B33', '#215B33', '#215B33', '#215B33',
    ],
  },

  // Vanuatu: 3 red, 3 black/yellow, 3 green = 9 rows
  'VU': {
    name: 'Vanuatu',
    emoji: '🇻🇺',
    rows: [
      '#D21034', '#D21034', '#D21034',
      '#000000', '#FCD116', '#000000',
      '#009543', '#009543', '#009543',
    ],
  },

  // Samoa: red with white/blue = 9 rows
  'WS': {
    name: 'Samoa',
    emoji: '🇼🇸',
    rows: [
      '#CE1126', '#CE1126', '#CE1126',
      '#CE1126', '#FFFFFF', '#CE1126',
      '#CE1126', '#CE1126', '#CE1126',
    ],
  },

  // Tonga: red with white = 9 rows
  'TO': {
    name: 'Tonga',
    emoji: '🇹🇴',
    rows: [
      '#C8102E', '#C8102E', '#C8102E',
      '#FFFFFF', '#C8102E', '#FFFFFF',
      '#C8102E', '#C8102E', '#C8102E',
    ],
  },

  // Kiribati: 3 red, 3 yellow, 3 blue = 9 rows
  'KI': {
    name: 'Kiribati',
    emoji: '🇰🇮',
    rows: [
      '#E73C3E', '#E73C3E', '#E73C3E',
      '#FCD116', '#FCD116', '#FCD116',
      '#003F87', '#003F87', '#003F87',
    ],
  },

  // Micronesia: 9 blue rows = 9 rows
  'FM': {
    name: 'Micronesia',
    emoji: '🇫🇲',
    rows: [
      '#75B2DD', '#75B2DD', '#75B2DD',
      '#75B2DD', '#FFFFFF', '#75B2DD',
      '#75B2DD', '#75B2DD', '#75B2DD',
    ],
  },

  // Marshall Islands: 4 blue, 1 white/orange, 4 orange = 9 rows
  'MH': {
    name: 'Marshall Islands',
    emoji: '🇲🇭',
    rows: [
      '#003893', '#003893', '#003893', '#003893',
      '#FFFFFF',
      '#DD7500', '#DD7500', '#DD7500', '#DD7500',
    ],
  },

  // Palau: 9 light blue rows = 9 rows
  'PW': {
    name: 'Palau',
    emoji: '🇵🇼',
    rows: [
      '#4AADD6', '#4AADD6', '#4AADD6', '#4AADD6',
      '#FFDE00',
      '#4AADD6', '#4AADD6', '#4AADD6', '#4AADD6',
    ],
  },

  // Nauru: 9 blue/yellow rows = 9 rows
  'NR': {
    name: 'Nauru',
    emoji: '🇳🇷',
    rows: [
      '#002170', '#002170', '#002170', '#002170',
      '#FFC61E',
      '#002170', '#002170', '#002170', '#002170',
    ],
  },

  // Tuvalu: light blue = 9 rows
  'TV': {
    name: 'Tuvalu',
    emoji: '🇹🇻',
    rows: [
      '#1C8DD9', '#1C8DD9', '#1C8DD9',
      '#1C8DD9', '#1C8DD9', '#1C8DD9',
      '#1C8DD9', '#1C8DD9', '#1C8DD9',
    ],
  },
}

// Get list of all flags for display
export const FLAG_LIST = Object.entries(FLAGS).map(([code, flag]) => ({
  code,
  ...flag,
}))

// Generate bead grid for a flag
export function generateFlagGrid(
  flagCode: string,
  beadsPerRow: number = 22
): { grid: string[][], rows: number } {
  const flag = FLAGS[flagCode]
  if (!flag) {
    return { grid: [], rows: 0 }
  }

  const rows = flag.rows.length
  const grid: string[][] = []

  for (let row = 0; row < rows; row++) {
    const rowColors: string[] = []
    for (let col = 0; col < beadsPerRow; col++) {
      rowColors.push(flag.rows[row])
    }
    grid.push(rowColors)
  }

  return { grid, rows }
}

// Generate name pattern
export function generateNameGrid(
  name: string,
  textColor: string = '#ee751c',
  bgColor: string = '#1a1a2e'
): { grid: string[][], rows: number } {
  const rows = 9 // Minimum 9 rows
  const letterWidth = 4
  const spacing = 1
  const padding = 2

  const totalWidth = padding * 2 + name.length * letterWidth + (name.length - 1) * spacing

  const grid: string[][] = Array(rows).fill(null).map(() =>
    Array(totalWidth).fill(bgColor)
  )

  let xPos = padding
  for (const _char of name.toUpperCase()) {
    for (let row = 1; row < rows - 1; row++) {
      for (let col = 0; col < letterWidth - 1; col++) {
        grid[row][xPos + col] = textColor
      }
    }
    xPos += letterWidth + spacing
  }

  return { grid, rows }
}
