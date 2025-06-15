// components/settings/SettingsTabs.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/shadcn/tabs';
import { CompanySettingsForm } from './CompanySettingsForm';
import { AccountSettingsForm } from './AccountSettingsForm';

export function SettingsTabs() {
  return (
    <Tabs defaultValue="account" className="space-y-8">
      <TabsList className="grid w-full grid-cols-2"> {/* Ajuste o grid-cols conforme o número de abas */}
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="company">Empresa</TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <AccountSettingsForm />
      </TabsContent>
      <TabsContent value="company">
        <CompanySettingsForm />
      </TabsContent>
    </Tabs>
  );
}