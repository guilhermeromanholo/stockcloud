import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { CheckIcon } from 'lucide-react'; // Ícone de check para as funcionalidades
import { Badge } from '@/components/shadcn/badge'; // Para destacar o plano recomendado

interface FeatureProps {
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ text }) => (
  <li className="flex items-center text-sm text-gray-700 dark:text-gray-300">
    <CheckIcon className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
    {text}
  </li>
);

interface PlanCardProps {
  name: string;
  price: string;
  frequency: string;
  features: string[];
  isRecommended?: boolean;
  buttonText: string;
  buttonLink: string;
  description?: string;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  price,
  frequency,
  features,
  isRecommended = false,
  buttonText,
  buttonLink,
  description,
}) => (
  <Card className={`flex flex-col ${isRecommended ? 'border-primary-foreground border-2 shadow-lg scale-[1.02]' : 'border'}`}>
    {isRecommended && (
      <CardHeader className="relative pb-4">
        <Badge className="absolute -top-3 right-4 px-3 py-1 text-xs font-semibold">
          Recomendado
        </Badge>
        <CardTitle className="mt-2 text-2xl font-bold text-center">{name}</CardTitle>
        {description && <CardDescription className="text-center">{description}</CardDescription>}
      </CardHeader>
    )}
    {!isRecommended && (
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-center">{name}</CardTitle>
        {description && <CardDescription className="text-center">{description}</CardDescription>}
      </CardHeader>
    )}
    <CardContent className="flex-grow flex flex-col justify-between">
      <div className="flex justify-center items-baseline my-4">
        <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
          {price}
        </span>
        <span className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">
          /{frequency}
        </span>
      </div>
      <ul role="list" className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <Feature key={index} text={feature} />
        ))}
      </ul>
    </CardContent>
    <CardFooter className="pt-0 flex justify-center">
      <Button className="w-full" size="lg" asChild={!!buttonLink}>
        {buttonLink ? <a href={buttonLink}>{buttonText}</a> : buttonText}
      </Button>
    </CardFooter>
  </Card>
);

export function PricingSection() {
  const plans = [
    {
      name: 'Básico',
      price: 'R$49',
      frequency: 'mês',
      description: 'Ideal para pequenas empresas e startups que estão começando.',
      features: [
        'Até 100 produtos',
        'Controle de estoque básico',
        'Relatórios diários',
        'Suporte por e-mail',
        '1 usuário',
      ],
      buttonText: 'Começar Agora',
      buttonLink: '#', // Substitua por link de cadastro/checkout
    },
    {
      name: 'Pro',
      price: 'R$99',
      frequency: 'mês',
      description: 'Perfeito para empresas em crescimento com mais volume de vendas.',
      features: [
        'Até 1000 produtos',
        'Controle de estoque avançado',
        'Relatórios detalhados',
        'Suporte prioritário (e-mail/chat)',
        'Até 5 usuários',
        'Integração com e-commerce (opcional)',
      ],
      isRecommended: true,
      buttonText: 'Experimentar Pro',
      buttonLink: '#', // Substitua por link de cadastro/checkout
    },
    {
      name: 'Empresarial',
      price: 'R$249',
      frequency: 'mês',
      description: 'Solução completa para grandes empresas e múltiplas filiais.',
      features: [
        'Produtos ilimitados',
        'Gerenciamento de múltiplos armazéns',
        'Relatórios customizados',
        'Suporte dedicado 24/7',
        'Usuários ilimitados',
        'Integrações personalizadas',
        'Consultoria estratégica',
      ],
      buttonText: 'Fale Conosco',
      buttonLink: '#', // Substitua por link de contato/orçamento
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl">
            Escolha o Plano Certo para Você
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Planos flexíveis para todas as necessidades do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              name={plan.name}
              price={plan.price}
              frequency={plan.frequency}
              features={plan.features}
              isRecommended={plan.isRecommended}
              buttonText={plan.buttonText}
              buttonLink={plan.buttonLink}
              description={plan.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p>
            * Todos os planos incluem 7 dias de teste grátis. Cancele a qualquer momento.
          </p>
          <p className="mt-2">
            Precisa de algo sob medida? <a href="#" className="text-primary hover:underline font-medium">Entre em contato</a> para uma solução personalizada.
          </p>
        </div>
      </div>
    </section>
  );
}