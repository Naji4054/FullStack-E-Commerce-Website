import React from 'react'
const TimelineStep = ({ step, order, isCompleted, isCurrent, isLastStep, icon, description }) => {
  // Define status colors based on order status
  const statusColor = {
      completed: 'bg-green-900 text-green-100',
      processing: 'bg-blue-600 text-blue-100',
      shipped: 'bg-blue-800 text-blue-100',
      pending: 'bg-red-700 text-red-100',
  };

  // Set icon background color based on whether the step is completed or current
  const iconBgColor = isCompleted || isCurrent
      ? statusColor[step.status] || 'bg-indigo-900 text-indigo-100'
      : 'bg-gray-100 text-gray-500';

  const connectorColor = isCompleted ? 'bg-blue-500' : 'bg-gray-200';
  const labelTextColor = isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';
  const descriptionTextColor = isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';

  return (
      <li className="relative mb-6 sm:mb-0 sm:pl-10">
          <div className="flex items-center">
              <div
                  className={`z-10 flex items-center justify-center w-6 h-6 ${iconBgColor} rounded-full ring-0 ring-white shrink-0`}
              >
                  <i className={`ri-${icon.iconName} text-xl`}></i>
              </div>
              {!isLastStep && <div className={`hidden sm:flex w-full h-0.5 ${connectorColor}`} />}
          </div>
          <div className="mt-3 sm:pe-8">
              <h3 className={`font-medium text-base ${labelTextColor}`}>{step.label}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
                  {new Date(order.updatedAt).toLocaleString() || 'Time'}
              </time>
              <p className={`text-base font-normal ${descriptionTextColor}`}>{description}</p>
          </div>
      </li>
  );
};


export default TimelineStep