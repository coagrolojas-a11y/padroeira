import React from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Heart, Users, GraduationCap, Calendar, Phone, Mail, MapPin, Globe, Instagram, Facebook, Target, Eye, Lightbulb, ArrowRight, CheckCircle, QrCode } from 'lucide-react';
import logoImage from './assets/logo.png';
import jovensFormacaoImage from './assets/jovens_formacao.jpg';
import jovensEstudandoImage from './assets/jovens_estudando.jpeg';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={logoImage} alt="Projeto Padroeira Solidária" className="h-12 w-auto" />
              <span className="text-xl font-bold text-blue-800">Padroeira Solidária</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-800 transition-colors">Home</button>
              <button onClick={() => scrollToSection('historia')} className="text-gray-700 hover:text-blue-800 transition-colors">História</button>
              <button onClick={() => scrollToSection('impacto')} className="text-gray-700 hover:text-blue-800 transition-colors">Impacto</button>
              <button onClick={() => scrollToSection('metodologia')} className="text-gray-700 hover:text-blue-800 transition-colors">Metodologia</button>
              <button onClick={() => scrollToSection('parceiros')} className="text-gray-700 hover:text-blue-800 transition-colors">Parceiros</button>
              <button onClick={() => scrollToSection('midia')} className="text-gray-700 hover:text-blue-800 transition-colors">Mídia</button>
              <button onClick={() => scrollToSection('equipe')} className="text-gray-700 hover:text-blue-800 transition-colors">Equipe</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-800 transition-colors">Contato</button>
            </div>
            <Button onClick={() => scrollToSection('parceiros')} className="bg-blue-800 hover:bg-blue-900">
              Seja um Parceiro
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  PROJETO <span className="text-blue-800">PADROEIRA</span>
                  <br />
                  <span className="text-amber-600">SOLIDÁRIA</span>
                </h1>
                <p className="text-xl text-gray-600 italic">Transformando vidas através da educação!</p>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Há mais de duas décadas, acreditamos que a educação é a chave para a transformação verdadeira. 
                Junte-se a nós e descubra o poder de uma oportunidade na vida de quem mais precisa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('parceiros')} 
                  size="lg" 
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  SEJA UM PARCEIRO
                </Button>
                <Button 
                  onClick={() => scrollToSection('historia')} 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-800 text-blue-800 hover:bg-blue-50 px-8 py-3"
                >
                  CONHEÇA NOSSA HISTÓRIA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-800">30.000+</div>
                  <div className="text-sm text-gray-600">Famílias atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">100+</div>
                  <div className="text-sm text-gray-600">Jovens profissionalizados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">22</div>
                  <div className="text-sm text-gray-600">Anos de história</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={jovensFormacaoImage} 
                alt="Jovens em formação profissional" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="h-8 w-8 text-blue-800" />
                  <div>
                    <div className="font-bold text-gray-900">23ª Edição</div>
                    <div className="text-sm text-gray-600">2025</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section id="historia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NOSSA HISTÓRIA</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                O Projeto Padroeira Solidária nasceu há 22 anos em Arapiraca, com o simples propósito de 
                ajudar famílias em vulnerabilidade por meio da entrega de cestas básicas.
              </p>
              <p>
                Hoje, essa semente germinou em um movimento de transformação social que oferece qualificação 
                profissional gratuita, apoio psicossocial e inserção no mercado de trabalho para jovens de 16 a 25 anos.
              </p>
              <p>
                Em 2025, celebramos nossa 23ª edição com a certeza de que educação inaugura vidas e rompe ciclos de pobreza.
              </p>
            </div>

            {/* Missão, Visão e Valores */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <Target className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                  <CardTitle className="text-blue-800">🎯 Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Inaugurar vidas por meio da educação, qualificação e solidariedade, abrindo caminhos para um futuro digno.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-amber-100 hover:border-amber-300 transition-colors">
                <CardHeader>
                  <Eye className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <CardTitle className="text-amber-600">👁 Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Ser referência na formação de jovens protagonistas em Arapiraca e região, reduzindo desigualdades por meio do conhecimento.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader>
                  <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-green-600">💡 Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Solidariedade:</strong> Cuidar e acolher</p>
                    <p><strong>Educação:</strong> Ponte para transformação</p>
                    <p><strong>Comprometimento:</strong> Responsabilidade</p>
                    <p><strong>Respeito:</strong> Valorizar diferenças</p>
                    <p><strong>Transparência:</strong> Clareza nas ações</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto e Resultados */}
      <section id="impacto" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">IMPACTO E RESULTADOS</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ao longo de nossa trajetória, apresentamos resultados que demonstram o impacto de nossas ações em Arapiraca.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-800 mb-2">30.000+</div>
                <p className="text-gray-700">Famílias atendidas com cestas básicas</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-amber-50 border-amber-200">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-amber-600 mb-2">100+</div>
                <p className="text-gray-700">Alunos concluíram cursos profissionalizantes</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-green-50 border-green-200">
              <CardContent className="pt-6">
                <Calendar className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-600 mb-2">3.000+</div>
                <p className="text-gray-700">Alunos receberam kits escolares</p>
              </CardContent>
            </Card>

            <Card className="text-center bg-purple-50 border-purple-200">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-600 mb-2">22</div>
                <p className="text-gray-700">Anos transformando vidas</p>
              </CardContent>
            </Card>
          </div>

          {/* Público-alvo */}
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">Nosso Público-alvo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Badge variant="outline" className="mb-2">16 a 25 anos</Badge>
                    <p className="text-gray-700">Jovens em idade de formação profissional</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Rede Pública</Badge>
                    <p className="text-gray-700">Egressos ou estudantes da rede pública</p>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">Disponibilidade</Badge>
                    <p className="text-gray-700">Com disponibilidade integral para participar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento */}
            <Card className="bg-gradient-to-r from-blue-50 to-amber-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <blockquote className="text-xl italic text-gray-800 mb-6">
                    "Antes do Padroeira, eu não imaginava que conseguiria um trabalho. Hoje, sou Jovem Aprendiz na Coagro e vejo um futuro diferente pra mim."
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900">João Victor, 18 anos</div>
                      <div className="text-gray-600">Ex-aluno da 21ª edição</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Metodologia */}
      <section id="metodologia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NOSSA METODOLOGIA</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A metodologia do Projeto Padroeira Solidária é um ciclo integrado e contínuo, focado na qualificação e inserção eficaz dos jovens no mercado de trabalho.
            </p>
          </div>

          {/* Ciclo de Transformação */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Estudo de Mercado", description: "Identificamos os setores com maior crescimento econômico e as demandas por mão de obra em Arapiraca.", color: "blue" },
                { step: "2", title: "Engajamento Corporativo", description: "Constituímos uma Aliança Estratégica com instituições e empresas para promover o Emprego Juvenil.", color: "amber" },
                { step: "3", title: "Formação em Habilidades", description: "Desenvolvemos habilidades psicossociais essenciais para que os jovens lidem com os desafios da vida cotidiana.", color: "green" },
                { step: "4", title: "Formação Técnica", description: "Oferecemos o desenvolvimento de competências e habilidades técnicas específicas para a área profissional escolhida.", color: "purple" },
                { step: "5", title: "Inserção no Mercado", description: "Os jovens qualificados são encaminhados para processos seletivos em empresas parceiras.", color: "red" },
                { step: "6", title: "Mentoria", description: "Acompanhamos os jovens por 8 meses para reforçar suas capacidades e adaptação ao ambiente profissional.", color: "indigo" }
              ].map((item, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* O que oferecemos */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-amber-50">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-gray-900">O que oferecemos aos participantes</CardTitle>
                <CardDescription className="text-center text-lg">8 meses de formação com cursos, mentorias e experiências práticas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Cursos profissionalizantes gratuitos e de alta qualidade",
                    "Mentorias e atividades práticas voltadas para o desenvolvimento integral",
                    "Suporte na inserção no mercado de trabalho ou fomento ao empreendedorismo",
                    "Certificado de conclusão para os participantes",
                    "Premiação para os melhores projetos de empreendedorismo"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seja um Parceiro */}
      <section id="parceiros" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">SEJA UM PARCEIRO DO FUTURO!</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Sua parceria é fundamental para que possamos continuar transformando vidas. Com apenas <strong className="text-blue-800">R$ 2.495,00</strong>, 
              você garante 6 meses de capacitação para um jovem aprendiz, impactando não apenas a vida dele, mas de toda a sua família.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={jovensEstudandoImage} 
                alt="Jovens estudando" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900">Sua contribuição proporciona diretamente:</h3>
              
              <div className="space-y-4">
                {[
                  { icon: GraduationCap, title: "Curso profissionalizante completo", description: "Preparando jovens com habilidades para as demandas do mercado" },
                  { icon: Users, title: "Fardamento e material didático", description: "Essenciais para o bom desempenho e identificação dos alunos" },
                  { icon: ArrowRight, title: "Ajuda com transporte", description: "Facilitando o acesso dos alunos aos locais dos cursos" },
                  { icon: Heart, title: "Ajuda com alimentação", description: "Garantindo suporte básico durante o período de capacitação" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <item.icon className="h-8 w-8 text-blue-800 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formas de Apoio */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 border-green-200 hover:border-green-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-green-600">Doação Mensal</CardTitle>
                <div className="text-3xl font-bold text-gray-900">R$ 50,00</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Ajuda com alimentação, transporte ou material didático para um aluno.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-amber-200 hover:border-amber-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-amber-600">Patrocínio Parcial</CardTitle>
                <div className="text-3xl font-bold text-gray-900">R$ 1.200,00</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Contribui com parte da formação de um jovem durante 3 meses.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-200 hover:border-blue-400 transition-colors bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-600">Patrocínio Completo</CardTitle>
                <div className="text-3xl font-bold text-gray-900">R$ 2.495,00</div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Garante 6 meses de curso, fardamento, lanche e mentoria para 1 jovem.</p>
                <Badge className="mt-2 bg-blue-600">Recomendado</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Dados para Doação */}
          <Card className="max-w-4xl mx-auto bg-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900">Como Doar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <QrCode className="h-24 w-24 mx-auto mb-4 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-4">Escaneie o QR Code para doar via PIX</p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-bold text-gray-900">PIX (CNPJ)</p>
                    <p className="text-blue-800 font-mono">55.374.927/0001-83</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Dados Bancários</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Banco:</strong> Inter</p>
                    <p><strong>Agência:</strong> 0001</p>
                    <p><strong>Conta:</strong> 4979080-2</p>
                    <p><strong>Titular:</strong> Associação Filantrópica Padroeira Solidária</p>
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-bold text-center">
                      💙 Sua ajuda pode mudar o futuro de vários jovens. Adote um ou mais!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Na Mídia */}
      <section id="midia" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NA MÍDIA</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Ao longo dos anos, o Projeto Padroeira Solidária tem ganhado visibilidade na imprensa e nas redes sociais, 
              comprovando seu impacto real na vida de milhares de pessoas em Arapiraca e região.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Jovens Arapiraquenses recebem certificados do Senac/AL",
                source: "Senac – janeiro/2025",
                description: "19 jovens certificados em Gastronomia, Gestão e Tecnologia. Inclui informações sobre a contratação de participantes e preparação da 22ª edição."
              },
              {
                title: "21ª Edição da Campanha Padroeira Solidária",
                source: "Alagoas24Horas – Abril/2024",
                description: "A campanha contou com a colaboração de prefeitos e parceiros, oferecendo suporte à população vulnerável através de kits escolares e oportunidades de qualificação profissional."
              },
              {
                title: "20ª Campanha 'Padroeira Solidária' é lançada oficialmente",
                source: "Mail Arapiraca – janeiro/2023",
                description: "A campanha foi oficialmente lançada na cidade, destacando o compromisso com a entrega de cestas básicas, kits escolares e cursos profissionalizantes."
              },
              {
                title: "Campanha Padroeira Solidária 17 anos",
                source: "Reportagem TV",
                description: "A reportagem destaca a entrega de mais de 3.000 cestas básicas para famílias carentes e a mobilização de voluntários."
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{item.title}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">{item.source}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">NOSSA EQUIPE 2025</h2>
            <div className="w-24 h-1 bg-blue-800 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Ricardo Barreto - Destaque */}
            <Card className="mb-12 bg-gradient-to-r from-blue-50 to-amber-50 border-2 border-blue-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ricardo Barreto</h3>
                  <p className="text-blue-800 font-medium mb-4">Fundador e idealizador</p>
                  <p className="text-gray-700 mb-6">
                    Com uma trajetória marcada pela sensibilidade social e compromisso com o próximo, 
                    Ricardo Barreto é o idealizador do Projeto Padroeira Solidária, uma iniciativa que há 
                    22 anos vem transformando realidades em Arapiraca e região.
                  </p>
                  <blockquote className="text-lg italic text-gray-800">
                    "Tudo começou com a entrega de cestas básicas. Hoje, inauguramos vidas com educação e oportunidades."
                  </blockquote>
                </div>
              </CardContent>
            </Card>

            {/* Equipe de Apoio */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Kaio Araujo", role: "Marketing" },
                { name: "Mikaelly Silva", role: "Secretária Executiva" },
                { name: "Michele Sampaio", role: "Financeiro" },
                { name: "Larissa Leite", role: "Recursos Humanos" }
              ].map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-gray-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-gray-600 text-sm">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-bold text-blue-800">Vamos juntos apoiar essa causa!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">CONECTE-SE</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-blue-100 max-w-4xl mx-auto">
              Para dúvidas, informações detalhadas sobre o edital de 2025 ou para discutir oportunidades de parceria 
              e como sua empresa pode se engajar ainda mais em nossa causa, entre em contato com a equipe do Padroeira Solidária:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold mb-2">Telefone</h3>
              <p className="text-blue-100">(82) 98102-8514</p>
            </div>

            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold mb-2">E-mail</h3>
              <p className="text-blue-100 text-sm">assistente.diretoria@grupocoagro.com</p>
            </div>

            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold mb-2">Endereço</h3>
              <p className="text-blue-100 text-sm">R. Expedicionário Brasileiro, 145 - Eldorado, Arapiraca - AL</p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-amber-400" />
              <h3 className="font-bold mb-2">Website</h3>
              <p className="text-blue-100 text-sm">grupocoagro.com.br/padroeirasolidaria</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center space-x-2">
                <Instagram className="h-6 w-6 text-amber-400" />
                <span className="text-blue-100">@_padroeirasolidaria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="h-6 w-6 text-amber-400" />
                <span className="text-blue-100">@padroeirasolidaria</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <img src={logoImage} alt="Projeto Padroeira Solidária" className="h-12 w-auto" />
              <span className="text-xl font-bold">Projeto Padroeira Solidária</span>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              Agradecemos sinceramente a todos que apoiaram o Projeto Padroeira Solidária ao longo dos anos. 
              Cada gesto ajudou a construir um legado de mais de duas décadas. Este projeto também é de vocês.
            </p>
            
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500 text-sm">
                © 2025 Projeto Padroeira Solidária. Todos os direitos reservados.
              </p>
              <p className="text-amber-400 font-medium mt-2">
                Transformando vidas através da educação!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
