import React from 'react';
import { StatCard } from '../components/ui/StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import {
  Dumbbell,
  Flame,
  TrendingUp,
  Award,
  Calendar,
  Activity,
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <h1 className="page-title">Dashboard</h1>
        <p className="page-subtitle">
          Welcome back! Here's your fitness overview for today.
        </p>
      </div>

      {/* Stats Grid - Origin Style */}
      <div className="dashboard-grid">
        <StatCard
          label="Workouts This Week"
          value="4"
          change={25}
          changeLabel="from last week"
          trend="up"
          icon={<Dumbbell className="w-8 h-8" />}
        />
        <StatCard
          label="Calories Burned"
          value="1,847"
          change={12}
          changeLabel="kcal"
          trend="up"
          icon={<Flame className="w-8 h-8" />}
        />
        <StatCard
          label="Current Weight"
          value="75.2 kg"
          change={-2.1}
          changeLabel="from start"
          trend="down"
          icon={<TrendingUp className="w-8 h-8" />}
        />
        <StatCard
          label="Personal Records"
          value="23"
          change={2}
          changeLabel="this month"
          trend="up"
          icon={<Award className="w-8 h-8" />}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Workout */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Workout</CardTitle>
              <Badge variant="success">Scheduled</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Upper Body Strength</h4>
                  <p className="text-sm text-muted-foreground">60 min • 8 exercises</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">0/8 exercises</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }} />
                </div>
              </div>

              <Button variant="primary" className="w-full">
                Start Workout
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Nutrition Summary */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Nutrition Today</CardTitle>
              <Badge variant="warning">In Progress</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Calories</p>
                  <p className="text-lg font-semibold text-foreground">1,450</p>
                  <p className="text-xs text-muted-foreground">of 2,200</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Protein</p>
                  <p className="text-lg font-semibold text-foreground">85g</p>
                  <p className="text-xs text-muted-foreground">of 150g</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Water</p>
                  <p className="text-lg font-semibold text-foreground">1.5L</p>
                  <p className="text-xs text-muted-foreground">of 3L</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Goal</span>
                  <span className="font-medium text-foreground">66%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '66%' }} />
                </div>
              </div>

              <Button variant="secondary" className="w-full">
                Log Meal
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Bench Press', value: '80kg × 8', time: '2 hours ago', icon: Dumbbell },
                { name: 'Running', value: '5.2 km', time: 'Yesterday', icon: Activity },
                { name: 'Deadlift PR', value: '150kg × 1', time: '2 days ago', icon: Award },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground">{activity.name}</h4>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{activity.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: 'Leg Day', date: 'Tomorrow', time: '09:00 AM' },
                { title: 'Trainer Session', date: 'Wed, Nov 13', time: '02:00 PM' },
                { title: 'Yoga Class', date: 'Thu, Nov 14', time: '06:00 PM' },
              ].map((event, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground">{event.title}</h4>
                    <p className="text-xs text-muted-foreground">{event.date} • {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievement Section */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'First Workout', icon: '🎯' },
              { name: '7 Day Streak', icon: '🔥' },
              { name: '100kg Lifted', icon: '💪' },
              { name: 'Early Bird', icon: '🌅' },
            ].map((achievement, index) => (
              <div key={index} className="p-4 rounded-xl bg-secondary text-center">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <p className="text-sm font-medium text-foreground">{achievement.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
