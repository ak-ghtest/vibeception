import React from 'react';
import { Card, CardContent } from '../components/ui/card';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary-800 mb-8 text-center">About Vibeception</h1>
        
        <Card className="mb-8 bg-pastel-pink/20 border-pastel-pink">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Vibeception was born from a passion for creating beautiful, user-friendly web applications. 
              Our journey began with a simple idea: to build interfaces that not only look good but also 
              feel good to use.
            </p>
            <p className="text-gray-700">
              We believe that well-designed applications can make a significant difference in how people 
              interact with technology. That's why we focus on creating experiences that are intuitive, 
              accessible, and visually pleasing.
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-pastel-purple/20 border-pastel-purple">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                We're on a mission to make beautiful interfaces accessible to everyone. We believe 
                in the power of design to transform user experiences and make digital products more 
                engaging and effective.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-pastel-blue/20 border-pastel-blue">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold text-primary-700 mb-4">Our Vision</h2>
              <p className="text-gray-700">
                We envision a world where every digital interaction is intuitive, delightful, and 
                accessible. We're working towards this future by creating tools and resources that 
                help developers build better experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-pastel-green/20 border-pastel-green">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-primary-700 mb-4">Our Values</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><span className="font-medium">Quality:</span> We take pride in our work and strive for excellence in everything we do.</li>
              <li><span className="font-medium">Innovation:</span> We're constantly exploring new ideas and pushing the boundaries of what's possible.</li>
              <li><span className="font-medium">User-centered:</span> We put users at the heart of our design process, focusing on their needs and experiences.</li>
              <li><span className="font-medium">Accessibility:</span> We believe that great design should be accessible to everyone, regardless of ability.</li>
              <li><span className="font-medium">Collaboration:</span> We work together, share knowledge, and learn from each other.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}