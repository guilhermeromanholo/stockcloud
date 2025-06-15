// app/(dashboard)/settings/page.tsx
import { Separator } from '@/components/shadcn/separator';
import { SettingsTabs } from '@/components/settings/SettingsTabs';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Configurações</h2>
        <p className="text-muted-foreground">
          Gerencie as configurações da sua conta e da sua empresa.
        </p>
      </div>
      <Separator />
      <SettingsTabs />
    </div>
  );
}