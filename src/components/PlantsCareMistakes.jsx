import React from 'react';

const PlantsCareMistakes = () => {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-6 text-green-900">🚫 Avoid These Plant Care Mistakes</h2>
            <ul className="list-disc list-inside max-w-xl mx-auto space-y-3 text-lg text-green-800">
                <li>Watering too much or too little—balance is key!</li>
                <li>Not enough sunlight—each plant has unique needs.</li>
                <li>Using incompatible soil that hinders growth.</li>
                <li>Neglecting pest control—little critters can wreak havoc.</li>
            </ul>
        </div>
    );
};

export default PlantsCareMistakes;