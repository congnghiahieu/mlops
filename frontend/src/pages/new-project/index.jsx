import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { listImages } from '../../api/project'
import { useMultistepForm } from '../../hooks/useMultiStepForm'
import StepFour from './steps/step_four'
import StepOne from './steps/step_one'
import StepThree from './steps/step_three'
import StepTwo from './steps/step_two'

const stepData = [
  { id: '01', name: 'Upload', href: '/app/new-project/step1', status: 'complete' },
  { id: '02', name: 'Label', href: '/app/new-project/step2', status: 'current' },
  { id: '03', name: 'Train', href: '#', status: 'upcoming' },
  { id: '04', name: 'Predict', href: '#', status: 'upcoming' },
]

export default function NewProject(props) {
  function updateFields(fields) {
    if (fields.isDoneStepOne) {
      goTo(1)
    }
    if (fields.isDoneStepTwo) {
      goTo(2)
    }
    if (fields.isDoneStepThree) {
      goTo(3)
    }
    if (fields.isDoneStepFour) {
      goTo(4)
    }
    setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const location = useLocation()
  const [data, setData] = useState({})
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const step = searchParams.get('step')
    if (step) {
      goTo(parseInt(step))
    }
  }, [])

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next, goTo } =
    useMultistepForm([
      <StepOne {...data} updateFields={updateFields} />,
      <StepTwo {...data} updateFields={updateFields} />,
      <StepThree {...data} updateFields={updateFields} />,
      <StepFour {...data} updateFields={updateFields} />,
    ])

  return (
    <div className="relative flex flex-col p-5 ">
      <div
        aria-label="Progress"
        className="p-5 bg-white border border-solid border-gray-300 rounded-md overflow-hidden"
      >
        <div className="max-w-2xl mx-auto px-4 md:px-0">
          <ul aria-label="Steps" className="items-center text-gray-600 font-medium md:flex">
            {stepData.map((item, idx) => (
              <li
                // onClick={() => {
                //   if (idx <= 2 && idx > 0) {
                //     goTo(idx)
                //   }
                // }}
                aria-current={currentStepIndex === idx + 1 ? 'step' : false}
                className="flex-1 last:flex-none flex gap-x-2 md:items-center"
              >
                <div className="flex items-center flex-col gap-x-2">
                  <div
                    className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${
                      currentStepIndex > idx
                        ? 'bg-indigo-600 border-indigo-600'
                        : '' || currentStepIndex === idx
                        ? 'border-indigo-600'
                        : ''
                    }`}
                  >
                    <span
                      id={`step-${idx + 1}`}
                      className={`next-step ${
                        currentStepIndex > idx
                          ? 'hidden'
                          : '' || currentStepIndex === idx
                          ? 'text-indigo-600'
                          : ''
                      }`}
                    >
                      {idx + 1}
                    </span>
                    {currentStepIndex > idx ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    ) : (
                      ''
                    )}
                  </div>
                  <hr
                    className={`h-12 border md:hidden ${
                      idx === steps.length
                        ? 'hidden'
                        : '' || currentStepIndex > idx
                        ? 'border-indigo-600'
                        : ''
                    }`}
                  />
                </div>
                <div className="h-8 flex items-center md:h-auto">
                  <h3 className={`text-sm ${currentStepIndex === idx ? 'text-indigo-600' : ''}`}>
                    {item.name}
                  </h3>
                </div>
                <hr
                  className={`hidden mr-2 w-full border md:block ${
                    idx === steps.length
                      ? 'hidden'
                      : '' || currentStepIndex > idx
                      ? 'border-indigo-600'
                      : ''
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>

        {steps[currentStepIndex]}
        {/*steps content  */}
        <div className="content mt-5">{/* <h1>{step}</h1> */}</div>
      </div>
    </div>
  )
}
