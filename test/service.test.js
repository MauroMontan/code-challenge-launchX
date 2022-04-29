import VisualPartnerService from '../src/service/visualpartner_service.js';

describe('test suit for service', () => {
    test('1) get certificated users', () => {
        const user = {
            'id': '6264d5d89f1df827eb84bb23',
            'name': 'Warren',
            'email': 'Todd@visualpartnership.xyz',
            'credits': 508,
            'enrollments': [
                'Visual Thinking Intermedio',
                'Visual Thinking Avanzado'
            ],
            'previousCourses': 1,
            'haveCertification': true
        };


        const certificatedStudents = VisualPartnerService.getCerficatedStudents;

        expect(certificatedStudents[0]).toEqual(user);

    });
});
