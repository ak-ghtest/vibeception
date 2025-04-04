import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">Welcome to Vibeception</h1>
          <p className="text-lg text-gray-600 mb-8">A beautifully designed React application with a soft, harmonious visual style.</p>
          <Button size="lg" className="bg-pastel-purple hover:bg-pastel-purple/90 text-primary-800">Get Started</Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-8 text-center">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Mobile-First</CardTitle>
              <CardDescription>Designed with responsiveness in mind</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our application is built using a mobile-first approach, ensuring a great experience on all devices.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern UI</CardTitle>
              <CardDescription>Beautiful components and layouts</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">We use Tailwind CSS and shadcn/ui to create a modern, clean, and beautiful user interface.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pastel Colors</CardTitle>
              <CardDescription>Soft and harmonious visual style</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our application uses a carefully selected pastel color palette to create a soft and pleasing experience.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="bg-pastel-blue/20 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8">Join us today and experience the beauty of Vibeception.</p>
          <Button size="lg">Sign Up Now</Button>
        </div>
      </section>
    </div>
  );
}