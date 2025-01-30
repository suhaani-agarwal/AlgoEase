'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Moon, Sun, Book, Youtube, Code, Timer, Brain, Trophy, Target } from 'lucide-react';
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AlgoEaseDashboard = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Sample data - in real app, this would come from props or API
    const progressData = {
        overall: 65,
        streak: 5,
        problemsSolved: {
            sorting: 12,
            graphs: 8,
            dp: 15
        }
    };
    const complexityData = [
        { n: 10, linear: 10, quadratic: 100, logarithmic: 3.32 },
        { n: 20, linear: 20, quadratic: 400, logarithmic: 4.32 },
        { n: 30, linear: 30, quadratic: 900, logarithmic: 4.91 }
    ];
    const learningPath = [
        { title: "Sorting Fundamentals", status: "completed" },
        { title: "Graph Algorithms", status: "in-progress" },
        { title: "Dynamic Programming", status: "upcoming" }
    ];
    const words = `Welcome back to AlgoEase`;

    return (
        <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
            {/* Header Section */}
            <div className="flex justify-between mb-6 h-28 items-center">
                <h1 className="text-3xl font-bold"><TextGenerateEffect words={words} /></h1>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="rounded-full"
                >
                    {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">


                {/* Learning Path Card */}
                <Card className="col-span-1 relative h-96">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Target className="h-5 w-5" />
                            Your Personalised Learning Path
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {learningPath.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${item.status === 'completed' ? 'bg-green-500' :
                                            item.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                                        }`} />
                                    <span>{item.title}</span>
                                    <Badge variant="outline">{item.status}</Badge>
                                </div>
                            ))}
                            <div className='absolute bottom-14 right-10'><Button>Explore!</Button></div>
                        </div>
                    </CardContent>
                </Card>

                {/* Recommendations Card */}
                {/* <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Youtube className="h-5 w-5" />
                            Recommended Resources
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="courses">
                            <TabsList className="w-full">
                                <TabsTrigger value="courses" className="w-full">Courses</TabsTrigger>
                                <TabsTrigger value="videos" className="w-full">Videos</TabsTrigger>
                            </TabsList>
                            <TabsContent value="courses">
                                <div className="space-y-2">
                                    <div className="p-2 rounded-lg bg-secondary">
                                        <div className="font-medium">Advanced Graph Algorithms</div>
                                        <div className="text-sm text-muted-foreground">Perfect next step for your journey</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="videos">
                                <div className="space-y-2">
                                    <div className="p-2 rounded-lg bg-secondary">
                                        <div className="font-medium">Understanding Dijkstra's Algorithm</div>
                                        <div className="text-sm text-muted-foreground">By AlgoExpert</div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card> */}

                {/* Complexity Visualizer Card */}
                {/* <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="h-5 w-5" />
              Time Complexity Visualization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart width={300} height={200} data={complexityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="n" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="linear" stroke="#8884d8" />
              <Line type="monotone" dataKey="logarithmic" stroke="#82ca9d" />
            </LineChart>
          </CardContent>
        </Card> */}

                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Timer className="h-5 w-5" />
                            Code and Algorithm Analyzer
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        Add code to analyse and 
                    </CardContent>
                </Card>


                {/* Daily Challenge Card */}
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            Daily Challenge
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <p>Implement Quick Sort Algorithm</p>
                            <div className="flex gap-2">
                                <Badge>Difficulty: Medium</Badge>
                                <Badge variant="secondary">Time Left: 23:45:12</Badge>
                            </div>
                            <Button className="w-full">Start Challenge</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* AI Doubt Solver Card */}
                {/* <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Brain className="h-5 w-5" />
                            AI Doubt Solver
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <textarea
                                className="w-full p-2 rounded-md border"
                                placeholder="Ask any DSA related question..."
                                rows={3}
                            />
                            <Button className="w-full">Get Help</Button>
                        </div>
                    </CardContent>
                </Card> */}


                {/* Progress Overview Card */}
                <Card className="col-span-1">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5" />
                            Progress Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span>Overall Progress</span>
                                    <span>{progressData.overall}%</span>
                                </div>
                                <Progress value={progressData.overall} />
                            </div>
                            <div className="flex gap-2">
                                <Badge variant="secondary">🔥 {progressData.streak} day streak</Badge>
                                <Badge variant="secondary">Level: Intermediate</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <Card className="col-span-1 absolute w-screen pr-6 bottom-0">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Brain className="h-5 w-5" />
                            AI Doubt Solver
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <textarea
                                className="w-full p-2 rounded-md border"
                                placeholder="Ask any DSA related question..."
                                rows={3}
                            />
                            <Button className="w-full">Get Help</Button>
                        </div>
                    </CardContent>
                </Card>

        </div>
    );
};

export default AlgoEaseDashboard;