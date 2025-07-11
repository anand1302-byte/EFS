import dynamic from "next/dynamic";
import 'chart.js/auto';
const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
    ssr: false
});
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
        {
            label: 'Performance',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 70, 60, 90, 100, 120],
        }
    ]
}

export default function Chart() {
    return (
        <div className="flex flex-col items-center w-full h-full bg-white p-8 mt-6">
            <div className="w-full">
                <Line data={data} />
            </div>
        </div>
    );
}