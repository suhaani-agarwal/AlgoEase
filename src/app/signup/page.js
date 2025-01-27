"use client"
import React, { useState } from 'react';
import { Github, ChevronRight, ChevronLeft, Book, Clock, Target, Code2, Sparkles } from 'lucide-react';

import { FaGoogle } from "react-icons/fa";

const signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    level: '',
    goals: [],
    learningStyle: '',
    experience: '',
    timeCommitment: ''
  });

  const learningGoals = [
    { id: 'algorithms', label: 'Master Algorithms' },
    { id: 'complexity', label: 'Understand Complexity' },
    { id: 'interviews', label: 'Prepare for Interviews' },
    { id: 'advanced', label: 'Explore Advanced Topics' }
  ];

  const handleGoalToggle = (goalId) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goalId)
        ? prev.goals.filter(id => id !== goalId)
        : [...prev.goals, goalId]
    }));
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((num) => (
        <div key={num} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            {num}
          </div>
          {num < 3 && (
            <div className={`w-12 h-1 ${
              step > num ? 'bg-blue-600' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const SignupStep = () => (
    <div className="max-w-md w-full space-y-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Join AlgoEase</h2>
        <p className="mt-2 text-gray-600">Start your DSA learning journey today</p>
      </div>
      
      <div className="space-y-4">
        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors">
          <FaGoogle className="w-5 h-5 mr-2" />
          Continue with Google
        </button>
        
        <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors">
          <Github className="w-5 h-5 mr-2" />
          Continue with GitHub
        </button>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
          </div>
          
          <button 
            type="button"
            onClick={() => setStep(2)}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Sign Up
            <ChevronRight className="ml-2 w-4 h-4" />
          </button>
        </form>
        
        <button 
          onClick={() => setStep(2)}
          className="w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Continue as Guest
        </button>
      </div>
    </div>
  );

  const PersonalizationStep = () => (
    <div className="max-w-2xl w-full space-y-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Personalize Your Experience</h2>
        <p className="mt-2 text-gray-600">Help us create your perfect learning path</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Level</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['Absolute Beginner', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <button
                key={level}
                onClick={() => setFormData({ ...formData, level })}
                className={`px-4 py-2 rounded-md text-sm ${
                  formData.level === level
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Learning Goals</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {learningGoals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleGoalToggle(goal.id)}
                className={`px-4 py-3 rounded-md text-sm flex items-center ${
                  formData.goals.includes(goal.id)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                <Target className="w-4 h-4 mr-2" />
                {goal.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Learning Style</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {['Video Tutorials', 'Text-based Learning', 'Interactive Exercises'].map((style) => (
              <button
                key={style}
                onClick={() => setFormData({ ...formData, learningStyle: style })}
                className={`px-4 py-3 rounded-md text-sm ${
                  formData.learningStyle === style
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                {style}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Coding Experience</label>
          <div className="grid grid-cols-3 gap-3">
            {['0-3 months', '3-6 months', '6+ months'].map((exp) => (
              <button
                key={exp}
                onClick={() => setFormData({ ...formData, experience: exp })}
                className={`px-4 py-2 rounded-md text-sm ${
                  formData.experience === exp
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                {exp}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Time Commitment</label>
          <div className="grid grid-cols-3 gap-3">
            {['< 1 hour/day', '1-2 hours/day', '2+ hours/day'].map((time) => (
              <button
                key={time}
                onClick={() => setFormData({ ...formData, timeCommitment: time })}
                className={`px-4 py-2 rounded-md text-sm ${
                  formData.timeCommitment === time
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                } transition-colors`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-6">
        <button
          onClick={() => setStep(1)}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        
        <button
          onClick={() => setStep(3)}
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Generate Roadmap
          <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const RoadmapStep = () => (
    <div className="max-w-4xl w-full space-y-6 p-8 bg-white rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">Your Learning Roadmap</h2>
        <p className="mt-2 text-gray-600">Personalized path based on your preferences</p>
      </div>
      
      <div className="space-y-8">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Book className="w-5 h-5 mr-2 text-blue-600" />
            Recommended Path
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">1</div>
              <div className="ml-4">
                <h4 className="font-medium">Foundations of Programming</h4>
                <p className="text-sm text-gray-600">Basic syntax, variables, control structures</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">2</div>
              <div className="ml-4">
                <h4 className="font-medium">Data Structures Basics</h4>
                <p className="text-sm text-gray-600">Arrays, strings, linked lists</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">3</div>
              <div className="ml-4">
                <h4 className="font-medium">Basic Algorithms</h4>
                <p className="text-sm text-gray-600">Sorting, searching, basic problem-solving</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              Estimated Timeline
            </h3>
            <p className="text-gray-600">3-4 months to complete basic track</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Code2 className="w-5 h-5 mr-2 text-blue-600" />
              Practice Problems
            </h3>
            <p className="text-gray-600">50+ curated problems to solve</p>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-blue-600" />
              Key Milestones
            </h3>
            <p className="text-gray-600">15 achievement badges to earn</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between pt-6">
        <button
          onClick={() => setStep(2)}
          className="flex items-center px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </button>
        
        <button
          className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
          <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <StepIndicator />
      {step === 1 && <SignupStep />}
      {step === 2 && <PersonalizationStep />}
      {step === 3 && <RoadmapStep />}
    </div>
  );
};

export default signup;