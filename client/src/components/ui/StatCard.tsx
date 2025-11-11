import React from 'react';
import { Card } from './Card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  changeLabel,
  icon,
  trend,
}) => {
  const getTrendIcon = () => {
    if (!trend) return null;

    switch (trend) {
      case 'up':
        return <TrendingUp className="w-4 h-4" />;
      case 'down':
        return <TrendingDown className="w-4 h-4" />;
      case 'neutral':
        return <Minus className="w-4 h-4" />;
    }
  };

  const getTrendColor = () => {
    if (!trend) return '';

    switch (trend) {
      case 'up':
        return 'stat-change positive';
      case 'down':
        return 'stat-change negative';
      case 'neutral':
        return 'stat-change text-muted-foreground';
    }
  };

  return (
    <Card className="stat-card hover:shadow-card-hover transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="stat-label">{label}</p>
          <p className="stat-value">{value}</p>
          {(change !== undefined || changeLabel) && (
            <div className={`flex items-center gap-1.5 mt-3 ${getTrendColor()}`}>
              {getTrendIcon()}
              <span className="text-sm">
                {change !== undefined && `${change > 0 ? '+' : ''}${change}%`}
                {changeLabel && ` ${changeLabel}`}
              </span>
            </div>
          )}
        </div>
        {icon && (
          <div className="text-primary opacity-90 mt-1">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
