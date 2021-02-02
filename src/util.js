export default function formatCurreny(num){
    return "₹"+Number(Number(num).toFixed(1)).toLocaleString()+" ";
}