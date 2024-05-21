'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Teachers() {
    const [teachersList, setTeachersList] = useState([]);
    const [teachersLoaded, setTeachersLoaded] = useState(false);

    useEffect(() => {
        if (!teachersLoaded) {
            loadTeachers();
        }
    }, [teachersLoaded]);

    const loadTeachers = () => {
        fetch(`http://localhost:8000/teachers`)
            .then(response => response.json())
            .then(data => {
                setTeachersList(data);
                setTeachersLoaded(true);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="teachers-container">
            <h1>Our Teachers</h1>
            <div className="teachers-grid">
                {teachersList.map(teacher => (
                    <div key={teacher.id} className="teacher">
                        <h2><strong>{teacher.name}</strong></h2>
                        <p><strong>{teacher.job}</strong></p>
                        <p>{teacher.text}</p>
                        <img src={teacher.img} alt={teacher.name} className="teacher-img" />
                        <Link href={`/pages/teacher/${teacher.id}`} className="custom-link">Tab to see the reviews</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
