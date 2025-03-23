import { Clock, MapPin, Ship, Truck, Users } from "lucide-react"

const Nosotros = () => {
    return (
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
            {/* Hero Section */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">TSCH PERU</h1>
                    <p className="text-2xl font-medium text-secondary mt-2">Expertos en Repuestos Portuarios</p>
                    <p className="text-muted-foreground md:text-xl">
                        Somos una empresa líder en la distribución de repuestos de alta calidad para equipos portuarios,
                        comprometidos con la eficiencia y continuidad operativa de nuestros clientes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
                            Nuestros Productos
                        </button>
                        <button variant="outline" size="lg">
                            Contáctanos
                        </button>
                    </div>
                </div>
                <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img
                        src="/placeholder.svg?height=720&width=1280"
                        alt="Puerto con grúas y contenedores"
                        className="object-cover"
                        fill
                        priority
                    />
                </div>
            </div>

            {/* Mission and Vision */}
            <div className="mt-20 grid gap-12 lg:grid-cols-2">
                <div>
                    <div className="bg-primary/10">
                        <div className="flex items-center gap-2 text-primary">
                            <div className="h-5 w-5 text-secondary" />
                            Nuestra Misión
                        </div>
                    </div>
                    <div>
                        <p>
                            Proporcionar soluciones integrales en repuestos para equipos portuarios, garantizando la máxima
                            disponibilidad operativa de las instalaciones de nuestros clientes mediante productos de calidad, entrega
                            oportuna y asesoría técnica especializada.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="bg-primary/10">
                        <div className="flex items-center gap-2 text-primary">
                            <Ship className="h-5 w-5 text-secondary" />
                            Nuestra Visión
                        </div>
                    </div>
                    <div>
                        <p>
                            Ser reconocidos como el socio estratégico preferido en el suministro de repuestos para equipos portuarios
                            en toda la región, destacándonos por nuestra excelencia en servicio, innovación y compromiso con el éxito
                            de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Por qué elegirnos?</h2>
                    <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                        Nos distinguimos por ofrecer un servicio integral que combina calidad, experiencia y compromiso
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="h-5 w-5 text-secondary" />
                                Calidad Garantizada
                            </div>
                        </div>
                        <div>
                            <p>
                                Trabajamos exclusivamente con fabricantes certificados y ofrecemos garantía en todos nuestros repuestos.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Clock className="h-5 w-5 text-secondary" />
                                Entrega Rápida
                            </div>
                        </div>
                        <div>
                            <p>Contamos con un amplio inventario y una logística eficiente para minimizar los tiempos de entrega.</p>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-secondary" />
                                Asesoría Técnica
                            </div>
                        </div>
                        <div>
                            <p>
                                Nuestro equipo de especialistas brinda soporte técnico para ayudarte a encontrar la solución exacta que
                                necesitas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team */}
            <div className="mt-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestro Equipo</h2>
                    <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                        Contamos con profesionales experimentados en el sector portuario y logístico
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        { name: "Carlos Rodríguez", position: "Director General", image: "/placeholder.svg?height=400&width=400" },
                        {
                            name: "Ana Martínez",
                            position: "Gerente de Operaciones",
                            image: "/placeholder.svg?height=400&width=400",
                        },
                        { name: "Miguel Sánchez", position: "Jefe de Logística", image: "/placeholder.svg?height=400&width=400" },
                        { name: "Laura Gómez", position: "Especialista Técnico", image: "/placeholder.svg?height=400&width=400" },
                    ].map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                                <img src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                            </div>
                            <h3 className="font-bold">{member.name}</h3>
                            <p className="text-muted-foreground">{member.position}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Nosotros