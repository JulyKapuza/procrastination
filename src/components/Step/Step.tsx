import { ReactElement} from "react";
import {useStore} from "zustand";
import {appStore} from "@/stores/app";
import {useConfig} from "@/common/hooks/useConfig";
import {QuestionType} from "@/common/interfaces/question";
import { InspirationStep } from "../InspirationStep/InspirationStep";
import {EmailSubscription } from "../EmailSubscribe/EmailSubscribe";
import { SingleAnswerList } from "../SingleAnswerList/SingleAnswerList";
import { MultipleAnswerList } from "../MultipleAnswerList/MultipleAnswerList";

const contentMap: Record<QuestionType, ReactElement> = {
    single: <SingleAnswerList />,
    multiple: <MultipleAnswerList />,
    inspiration: <InspirationStep />,
    email: <EmailSubscription />,
}

export const Step = () => {
    const {quiz} = useConfig();
    const {currentStep} = useStore(appStore)


    return contentMap[quiz.questions[currentStep]?.type]
}