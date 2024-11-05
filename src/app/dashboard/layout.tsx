import type { Metadata } from 'next';
import Sidebar from '@/components/sidebar';

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard page',
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <div className="flex-1 bg-gray-100 p-10">{children}</div>
        </div>
    );
}
