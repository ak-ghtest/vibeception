import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-800 mb-8 text-center">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-pastel-yellow/20 border-pastel-yellow">
            <CardHeader>
              <CardTitle>Our Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-primary-700">Address</h3>
                  <p className="text-gray-600">123 Vibeception St, Digital City, VS 12345</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary-700">Email</h3>
                  <p className="text-gray-600">hello@vibeception.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary-700">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary-700">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9am - 5pm</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-pastel-blue/10 border-pastel-blue">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pastel-blue focus:border-transparent"
                    placeholder="Your message"
                  />
                </div>
                
                <Button className="w-full bg-pastel-purple hover:bg-pastel-purple/90 text-primary-800">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-pastel-green/20 border-pastel-green">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-primary-700 mb-4 text-center">Find Us</h2>
            <div className="rounded-lg overflow-hidden h-64 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-600">Map placeholder - Google Maps will be integrated here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}