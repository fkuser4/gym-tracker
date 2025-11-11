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
    <div className="space-y-10 animate-fade-in pb-12">
      {/* Page Header - More spacious */}
      <div className="pt-4 pb-2">
        <h1 className="text-4xl font-semibold text-foreground mb-3" style={{ letterSpacing: '-0.03em' }}>
          Dashboard
        </h1>
        <p className="text-base text-muted-foreground" style={{ letterSpacing: '-0.006em' }}>
          Welcome back! Here's your fitness overview for today.
        </p>
      </div>

      {/* Stats Grid - Origin Style with more spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Main Content Grid - More spacing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {/* Today's Workout */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Today's Workout</CardTitle>
              <Badge variant="success">Scheduled</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-base mb-1">Upper Body Strength</h4>
                  <p className="text-sm text-muted-foreground">60 min • 8 exercises</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">0/8 exercises</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full transition-all" style={{ width: '0%' }} />
                </div>
              </div>

              <Button variant="primary" className="w-full h-12 text-base">
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
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Calories</p>
                  <p className="text-2xl font-semibold text-foreground mb-1" style={{ letterSpacing: '-0.02em' }}>1,450</p>
                  <p className="text-xs text-muted-foreground">of 2,200</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Protein</p>
                  <p className="text-2xl font-semibold text-foreground mb-1" style={{ letterSpacing: '-0.02em' }}>85g</p>
                  <p className="text-xs text-muted-foreground">of 150g</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">Water</p>
                  <p className="text-2xl font-semibold text-foreground mb-1" style={{ letterSpacing: '-0.02em' }}>1.5L</p>
                  <p className="text-xs text-muted-foreground">of 3L</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Goal</span>
                  <span className="font-medium text-foreground">66%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full transition-all" style={{ width: '66%' }} />
                </div>
              </div>

              <Button variant="secondary" className="w-full h-12 text-base">
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
            <div className="space-y-5">
              {[
                { name: 'Bench Press', value: '80kg × 8', time: '2 hours ago', icon: Dumbbell },
                { name: 'Running', value: '5.2 km', time: 'Yesterday', icon: Activity },
                { name: 'Deadlift PR', value: '150kg × 1', time: '2 days ago', icon: Award },
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-4 py-1">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <activity.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-1">{activity.name}</h4>
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
            <div className="space-y-5">
              {[
                { title: 'Leg Day', date: 'Tomorrow', time: '09:00 AM' },
                { title: 'Trainer Session', date: 'Wed, Nov 13', time: '02:00 PM' },
                { title: 'Yoga Class', date: 'Thu, Nov 14', time: '06:00 PM' },
              ].map((event, index) => (
                <div key={index} className="flex items-center gap-4 py-1">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-foreground mb-1">{event.title}</h4>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { name: 'First Workout', icon: '🎯' },
              { name: '7 Day Streak', icon: '🔥' },
              { name: '100kg Lifted', icon: '💪' },
              { name: 'Early Bird', icon: '🌅' },
            ].map((achievement, index) => (
              <div key={index} className="p-6 rounded-2xl bg-secondary text-center transition-all hover:bg-secondary/80">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <p className="text-sm font-medium text-foreground">{achievement.name}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
