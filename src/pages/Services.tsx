import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CalculatorCTA from '../components/CalculatorCTA';

const services = [
  {
    id: 'refrigerator',
    name: 'Refrigerator Repair',
    description: 'Expert refrigerator repair in Edmonton. We service all major brands including Samsung, LG, Whirlpool, GE, and more. Common issues we fix include temperature problems, ice maker repairs, water leaks, and strange noises.',
    details: [
      'Temperature control issues',
      'Ice maker problems',
      'Water leaks',
      'Strange noises',
      'Door seal replacement',
      'Compressor repairs'
    ],
    price: 'Starting at $85'
  },
  {
    id: 'washer',
    name: 'Washer Repair',
    description: 'Professional washer repair service in Edmonton. We fix common issues like not spinning, leaking, excessive noise, and drainage problems. All brands serviced including Maytag, Kenmore, and Samsung.',
    details: [
      'Spin cycle issues',
      'Drainage problems',
      'Loud noises',
      'Leaks',
      'Door lock repairs',
      'Belt replacement'
    ],
    price: 'Starting at $75'
  },
  {
    id: 'dryer',
    name: 'Dryer Repair',
    description: 'Fast and reliable dryer repair in Edmonton. Our technicians fix issues like no heat, loud noises, long drying times, and thermal fuse problems. Same-day service available for all major brands.',
    details: [
      'No heat issues',
      'Long drying times',
      'Noisy operation',
      'Thermal fuse repairs',
      'Belt replacement',
      'Vent cleaning'
    ],
    price: 'Starting at $75'
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'Professional dishwasher repair services in Edmonton. We handle problems like poor cleaning, leaking, drainage issues, and strange noises. Expert service for all major brands.',
    details: [
      'Poor cleaning results',
      'Drainage issues',
      'Leaks',
      'Spray arm repairs',
      'Pump problems',
      'Door seal replacement'
    ],
    price: 'Starting at $80'
  },
  {
    id: 'stove',
    name: 'Stove & Oven Repair',
    description: 'Complete stove and oven repair service in Edmonton. We fix electric and gas appliances, addressing issues like uneven heating, temperature problems, and faulty elements.',
    details: [
      'Heating element repairs',
      'Temperature control',
      'Igniter replacement',
      'Burner repairs',
      'Door hinge fixes',
      'Control panel issues'
    ],
    price: 'Starting at $85'
  },
  {
    id: 'microwave',
    name: 'Microwave Repair',
    description: 'Expert microwave repair in Edmonton. We service all types including built-in and countertop models. Common fixes include turntable issues, door problems, and heating malfunctions.',
    details: [
      'Heating problems',
      'Turntable repairs',
      'Door issues',
      'Control panel fixes',
      'Power problems',
      'Interior light repairs'
    ],
    price: 'Starting at $70'
  }
];

export default function Services() {
  return (
    <>
      <SEO
        title="Appliance Repair Services Edmonton | All Major Brands | Same-Day Service"
        description="Professional appliance repair services in Edmonton. Expert repairs for refrigerators, washers, dryers, dishwashers, stoves, and more. Licensed technicians and competitive rates."
        keywords="appliance repair services Edmonton, refrigerator repair Edmonton, washer repair Edmonton, dryer repair Edmonton, dishwasher repair Edmonton, stove repair Edmonton, oven repair Edmonton"
        canonical="/services"
      />
      <main className="bg-white">
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Repair Services
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Professional <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">appliance repair services</Link> in Edmonton. 
                Our <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">licensed technicians</Link> provide 
                <Link to="/" className="text-blue-600 hover:text-blue-500 font-semibold">same-day service</Link> at competitive rates.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="bg-white p-8 shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What We Fix:</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                  {service.details.map((detail, index) => (
                    <li key={index} className="text-gray-600 text-sm flex items-center">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                  <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                  <Link
                    to="/contact"
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                  >
                    Book Service
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Calculator CTA */}
          <div className="mt-24">
            <CalculatorCTA />
          </div>
        </div>
      </main>
    </>
  );
}