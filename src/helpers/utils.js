export const formatNumber = number => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'MAD' }).format(number);
}