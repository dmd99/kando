export const formatNumber = number => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(number);
}