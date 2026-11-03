const address = 'Bajrakabati Rd, Samanta Sahi, Mangalabag, Kataka, Odisha 753001';

export const salon = {
  address,
  phone: '097762 43077',
  phoneHref: 'tel:+919776243077',
  facebook: 'https://www.facebook.com/gilligilli93/',
  googleReviews: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Gilli Gilli Salon And Spa, ${address}`)}`,
  maps: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  mapEmbed: `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,
};
