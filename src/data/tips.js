import {
  TargetIcon,
  ShoeIcon,
  ShieldIcon,
  StopwatchIcon,
} from '../components/icons/TipIcons.jsx'

export const TIPS = [
  {
    title: 'Fokus pada Bola',
    text: 'Selalu lihat bola, jangan hanya melihat ke depan.',
    color: 'bg-emerald-600',
    Icon: TargetIcon,
  },
  {
    title: 'Gunakan Kedua Kaki',
    text: 'Latih kaki kanan dan kiri agar lebih lincah.',
    color: 'bg-red-600',
    Icon: ShoeIcon,
  },
  {
    title: 'Jaga Jarak dengan Lawan',
    text: 'Gunakan kontrol bola dan ubah arah jika ada tekanan.',
    color: 'bg-blue-600',
    Icon: ShieldIcon,
  },
  {
    title: 'Latihan Rutin',
    text: 'Lakukan latihan di berbagai situasi dan kondisi (lapangan, area sempit, dll).',
    color: 'bg-amber-500',
    Icon: StopwatchIcon,
  },
]

export default TIPS
