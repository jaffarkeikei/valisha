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
  // WORLD CUP CONTENDERS
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

  // Poland: 4 white, 5 red = 9 rows
  'PL': {
    name: 'Poland',
    emoji: '🇵🇱',
    rows: [
      '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
      '#DC143C', '#DC143C', '#DC143C', '#DC143C', '#DC143C',
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
