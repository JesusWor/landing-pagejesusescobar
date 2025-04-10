import TransitionPage from "@/components/transition-page";
import Container from "@/components/container";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";

const PageAboutMe = () => {
    return (
        <>
            <TransitionPage />
            <Container>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">My{' '}
                    <span className="font-bold text-secondary">carrer</span>
                </h1>
                
                <CounterServices />
                
                <TimeLine />
            </Container>
        </>
    );
}

export default PageAboutMe